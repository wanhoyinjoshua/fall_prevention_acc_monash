import React from 'react'
import { useState } from 'react'
import Input from './Input'
import Divider from './Divider'

function Base(props:any){

    function setparent(field:any,value:any){
        props.setParent(field,value)
    }
    function setbutton(id:any){
        var object:any={
            "0":false,
            "1":false,
            "2":false
        }
        object[`${id}`]=true
        setActive ((old:any)=>{
            return {...old,...object}
        })
    }

    const [active,setActive]=useState({
        "0":false,
        "1":false,
        "2":false
    })


    return (
        <div>
            <br></br>
            
            {props.data.additional&&props.data.additional.map((item:any)=>{

                return <div key={JSON.stringify(item)}>
                    
                    <Input
                    label={item.label}
                    id={item.id}
                    type={"number"}
                    changestate={setparent}

                    />
                   
                    
                    </div>
                


            })}

          
            <div className="block text-sm font-medium leading-6 text-gray-900">{props.data.title}</div>
           <br></br>
            <section className="isolate inline-flex rounded-md shadow-sm">
                <button className={`relative inline-flex items-center rounded-l-md  px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 ${active["0"]?"hover:bg-green-400":"hover:bg-gray-50"} focus:z-10 ${active["0"]?"bg-green-400":"bg-white"}` }
                onClick={()=>{
                    
                    setparent(props.data.id,0)
                    setbutton(0)
                }
                    
                    }>
                    {props.data.options[0]} 
                </button>
                <button  
               className={`relative inline-flex items-center rounded-l-md  px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 ${active["1"]?"hover:bg-green-400":"hover:bg-gray-50"} focus:z-10 ${active["1"]?"bg-green-400":"bg-white"}`}
                onClick={()=>{
                    
                    setparent(props.data.id,1)
                    setbutton(1)
                }
                    
                    }>
                {props.data.options[1]} 
                </button>
                <button 
                 className={`relative inline-flex items-center rounded-l-md  px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 ${active["2"]?"hover:bg-green-400":"hover:bg-gray-50"} focus:z-10 ${active["2"]?"bg-green-400":"bg-white"}`}
                onClick={()=>{
                    
                    setparent(props.data.id,2)
                    setbutton(2)
                }
                    
                    }>
                {props.data.options[2]} 
                </button>
            </section>
            <br></br>
            
    
        </div>
      )

}

const MiniBestItem = (props:any) => {
//props probably need to have 
// questionid
//setter from parent to set state
//all the options 



if(props.data.id==""){


}


  return (
    <div>

    
   <Base setParent={props.setParent} data={props.data}></Base>
   <Divider/>
   </div>
  )
}

export default MiniBestItem