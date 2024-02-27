'use client'
import React from 'react'
import { useState } from 'react'
import MiniBestItem from './MiniBestItem'
import { MiniBest } from '../constants/MiniBest'
import Results from './Results'
import { InitialState } from '../constants/InitialState'
import Input from './Input'
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
    <div className='my-8'>

       
       

    {globalstate==0&&
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section>
        <div className="block text-sm font-medium leading-6 text-gray-900">Does this patient have good insight</div>
            <section className="isolate inline-flex rounded-md shadow-sm">
                <button className={`relative inline-flex items-center rounded-l-md  px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 ${active["0"]?"hover:bg-green-400":"hover:bg-gray-50"} focus:z-10 ${active["0"]?"bg-green-400":"bg-white"}` }
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
               className={`relative inline-flex items-center rounded-l-md  px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 ${active["1"]?"hover:bg-green-400":"hover:bg-gray-50"} focus:z-10 ${active["1"]?"bg-green-400":"bg-white"}`}
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
            <Input
            label={'Age'}
            id={'age'}
            type={"number"}
            changestate={changestate}
            />
            <Input
            label={'30 s chair test (sec)'}
            id={"30s_chair_test"}
            type={"number"}
            changestate={changestate}
            />
            <Input
            label={'Feet together (sec)'}
            id={'Feet_tgt'}
            type={"number"}
            changestate={changestate}
            />
             <Input
            label={'Semi tandem Stance (sec)'}
            id={"Semi_tandem"}
            type={"number"}
            changestate={changestate}
            />
             <Input
            label={'Tandem (sec)'}
            id={'Tandem'}
            type={"number"}
            changestate={changestate}
            />
          <Input
            label={'Single leg stance (sec) with best leg'}
            id={'one_leg_stand'}
            type={"number"}
            changestate={changestate}
            />

           

          

          


           
            

            </section>
            
            
            <br>
            </br>
       

            
        </section>

       
        <section className='[&>*:nth-child(even)]:text-blue-600 [&>*:nth-child(even)]:font-bold  [&>*:nth-child(odd)]:bg-slate-100 '>
        {Minibeststate.map((data)=>{

    return  <MiniBestItem key={JSON.stringify(data)} data={data} setParent={changestate}></MiniBestItem>
    })}
    </section>

    <button 
    onClick={()=>{
    setGlobal(1)
    }}

    className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
    Submit
    </button>

    </div>
    
    }

  

    {globalstate==1&&<Results data={formData}></Results>}
       
    </div>
  )
}

export default Parent