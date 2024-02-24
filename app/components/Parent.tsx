'use client'
import React from 'react'
import { useState } from 'react'
import MiniBestItem from './MiniBestItem'
import { MiniBest } from '../constants/MiniBest'
import Results from './Results'
import { InitialState } from '../constants/InitialState'
const Parent = () => {

    function changestate(key:any,value:any){

        

        var changedata:any={
           
        }
        changedata[key]=value

        console.log(changedata)

        setFormData((old:any)=>{
            return {...old,...changedata}
        })


    }

    const[globalstate,setGlobal]=useState(0)
    const [active,setActive]=useState({
        "0":false,
        "1":false
    })
   
    const [formData,setFormData]=useState(InitialState)
    const [Minibeststate,setMinibest]=useState(MiniBest)

  return (
    <div>

       
       

    {globalstate==0&&
    <div>
        <section>
        <div className="block text-sm font-medium leading-6 text-gray-900">Does this patient have good insight</div>
            <section className="isolate inline-flex rounded-md shadow-sm">
                <button className={`relative inline-flex items-center rounded-l-md  px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 ${active["0"]?"bg-green-50":"bg-white"}` }
                onClick={()=>{
                    
                   setActive({
                    "0":true,
                    "1":false
                   
                })
                changestate("insight",1)
                }
                    
                    }>
                    Yes
                </button>
                <button  
               className={`relative inline-flex items-center rounded-l-md  px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 ${active["1"]?"bg-green-50":"bg-white"}`}
                onClick={()=>{
                    
                    setActive({
                        "0":false,
                        "1":true
                       
                    })
                    changestate("insight",2)
                }
                    
                    }>
                No
                </button>
               
            </section>
            <section className='flex flex-row gap-20'>
            <div>
            Age:
            <input 
            type='number'
            onChange={(e)=>{
                changestate("age",e.target.value)
            }}>
            </input>
            </div>
            <div>
            30 s chair test (sec)
            <input 
            type='number'
            onChange={(e)=>{
                changestate("30s_chair_test",e.target.value)
            }}>
            </input>
            </div>

            <div>
            Feet together  (sec)
            <input 
            type='number'
            onChange={(e)=>{
                changestate("Feet_tgt",e.target.value)
            }}>
            </input>
            </div>

            <div>
            Semi tandem Stance  (sec)
            <input 
            type='number'
            onChange={(e)=>{
                changestate("Semi_tandem",e.target.value)
            }}>
            </input>
            </div>

            <div>
            Tandem  (sec)
            <input 
            type='number'
            onChange={(e)=>{
                changestate("Tandem",e.target.value)
            }}>
            </input>
            </div>


            <div>
            Single leg stance (sec) with best leg 
            <input 
            type='number'
            onChange={(e)=>{
                changestate("one_leg_stand",e.target.value)
            }}>
            </input>
            </div>
            

            </section>
            
            
            <br>
            </br>
       

            
        </section>
        
        {Minibeststate.map((data)=>{

return  <MiniBestItem key={JSON.stringify(data)} data={data} setParent={changestate}></MiniBestItem>
})}

<button 
onClick={()=>{
setGlobal(1)
}}

className={`relative inline-flex items-center rounded-l-md  px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 "bg-white"` }>
Submit
</button>

    </div>
    
    }

  

    {globalstate==1&&<Results data={formData}></Results>}
       
    </div>
  )
}

export default Parent