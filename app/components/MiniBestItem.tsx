import React from 'react'
import { useState } from 'react'

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
            
            {props.data.additional&&props.data.additional.map((item:any)=>{

                return <div>
                    {item.label}
                    <input  type='number' onChange={(e)=>{
                        var value=e.target.value
                        setparent(item.id,value)


                    }}>
                    </input>
                    </div>
                


            })}

          
            <div className="block text-sm font-medium leading-6 text-gray-900">{props.data.title}</div>
            <section className="isolate inline-flex rounded-md shadow-sm">
                <button className={`relative inline-flex items-center rounded-l-md  px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 ${active["0"]?"bg-green-50":"bg-white"}` }
                onClick={()=>{
                    
                    setparent(props.data.id,0)
                    setbutton(0)
                }
                    
                    }>
                    {props.data.options[0]} 
                </button>
                <button  
               className={`relative inline-flex items-center rounded-l-md  px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 ${active["1"]?"bg-green-50":"bg-white"}`}
                onClick={()=>{
                    
                    setparent(props.data.id,1)
                    setbutton(1)
                }
                    
                    }>
                {props.data.options[1]} 
                </button>
                <button 
                 className={`relative inline-flex items-center rounded-l-md  px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 ${active["2"]?"bg-green-50":"bg-white"}`}
                onClick={()=>{
                    
                    setparent(props.data.id,2)
                    setbutton(2)
                }
                    
                    }>
                {props.data.options[2]} 
                </button>
            </section>
            
    
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
   <Base setParent={props.setParent} data={props.data}></Base>
  )
}

export default MiniBestItem