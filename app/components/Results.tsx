import React from 'react'
import ex from "../utils/ex.json"
import useResults from './useResults'
import { useState } from 'react'
import Downloadlink from "./DownloadLink"
import RiskClass from '../utils/RiskClass'
import Alert from './Alert'
const Results = (props:any) => {
    
const [assist,setAssist]=useState(4)
const data=useResults(props.data,assist)
const [alert,setAlert]=useState(false)
const Risk=new RiskClass(props.data)
const score_minibest=Risk.Minibest_risk
const [selected,setSelected]=useState<any>({
    "indep":[],
    "supervision":[],
    "sba":[],
    "handsonassist":[]


})
const aray=["","handsonassist","sba","supervision","indep"]

function hardreload(){
    console.log("hi")
    window.location.href = "http://localhost:3000/";
}
const copyToClipboard = async (text:string) => {
    try {
      await navigator.clipboard.writeText(text);
      
    } catch (error) {
     
    }
  };
function copy(){
    setAlert(true)
    var string=`
    Ax/ \n
    30s STS - ${props.data["30s_chair_test"]}reps\n
    TUG - ${props.data["TUG"]}S _ STEPS\n
    Feet together ${props.data["Feet_tgt"]}s\n
    Semi tandem  ${props.data["Semi_tandem"]} s\n
    Tandem stand  ${props.data["Tandem"]}s\n
    One leg stand  ${props.data["one_leg_stand"]}s\n
    \n
    MINI BEST TEST Score ${score_minibest.score}/ 28\n
    RISK AS PER AGE NORM - ${score_minibest.isHighrisk?"HIGHER RISK FOR FALLS":"LOWER RISK FOR FALLS"}
    SCORE 0-2 0=Severe, 1=Moderate, 2=Normal\n
    ${props.data["minibest_1"]} Sit to stand\n
    ${props.data["minibest_2"]} Rise to toes (3 secs)\n
    ${props.data["minibest_3_L"]} Stand on one leg  left (max 20 secs) time (secs) = ${props.data["minibest_3_trial_2_L"]} secs\n
    ${props.data["minibest_3_R"]} Stand on one leg  right (max 20 secs) time (secs) =  ${props.data["minibest_3_trial_2_R"]}5 secs\n
    ${props.data["minibest_4"]} Compensatory stepping forwards\n
    ${props.data["minibest_5"]} Compensatory stepping backward\n
    ${props.data["minibest_6_L"]} Compensatory stepping to the left\n
    ${props.data["minibest_6_R"]} Compensatory stepping to the right\n
    ${props.data["minibest_7"]} Firm surface FT, EO (max 30 secs) time (secs) =${props.data["minibest_7_s"]} secs\n
    ${props.data["minibest_8"]} Foam FT, EC (max 30 secs) time (secs) =${props.data["minibest_8_s"]}\n
    ${props.data["minibest_9"]} Incline FA, EC (max 30 secs) time (secs) =${props.data["minibest_9_s"]}\n
    ${props.data["minibest_10"]} Change gait speed over 10 metres \n
    Preferred speed: time (secs) /# of steps =\n
    
    Fast speed: time (secs) =\n
    ${props.data["minibest_11"]} Walk with head turns:10 metres time (secs) = \n
    ${props.data["minibest_12"]} Walk with pivot turns: # steps on turn = \n
    ${props.data["minibest_13"]} Step over obstacles\n
    TUG: time (secs) = ${props.data["minibest_14_TUG"]} secs\n
    Cognitive TUG “Days of the week backwards”: time (secs) =  ${props.data["minibest_14_TUG_DUAL"]} secs\n
    
    VESTIBULAR FUCTION TESTS\n
    -Saccades:NT\n
    -Smooth pursuit:NT\n
    -VOR:NT\n
    -VOR Suppression:NT\n
    -Head thrust test:- NT\n
    \n
    VERTEBROBASILAR INSUFFICIENCY TEST:NT\n
    \n
    
    BPPV TESTS:\n
    -Right Loaded Hallpike:NAD\n
    -Left Loaded Hallpike:NAd\n
    -Right Roll Test:NAd\n
    -Left Roll Test:NAD\n
    ${JSON.stringify(props.data)}

    
    `
    copyToClipboard(string)
    setTimeout(() => {
       setAlert(false)
      }, 2000);

}



  return (
    <div>
        Results
        <br></br>
        This program has now assessed the risks based on the following factors, task requirement of exercise, patient's balance ability, patient's insight, and level of assistance available to patient. The recommended exercises are deemed to be most likely be suitable for home with the level of support specified.
        If there are no recommendations, it means the exercises suitable for that level of assistance are unlikely to be challenging enough for the patient. 
       
        <div className='sticky top-0 bg-orange-50 z-40'>
      <label htmlFor="assist" className="block text-sm font-medium leading-6 text-gray-900">
      Assistance level patient have access to( set to independent by default)
      </label>
      <select
        id="assist"
        name="assist"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue={4}
        onChange={(e)=>{
            setAssist(Number(e.target.value))
        }}
      >
        <option value={1}>Hands on assist</option>
        <option value={2}>Standby assist</option>
        <option value={3}>Supervision</option>
        <option value={4}>Independent</option>
      </select>
      <br></br>
      <div className='flex flex-row gap-10'>
      <Downloadlink data={selected}></Downloadlink>

      <button onClick={hardreload} className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Try Again</button>

      <button 

      onClick={copy}
      
      className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Copy text for documentation</button>

      </div>
     
    </div>


<div className='grid grid-cols-4 gap-4 grid-cols-2   '>
            {data.map((ex:any)=>{

            if(ex.risk==16&&ex.risk>=12){
                return <div >
                
                <label key={ex.Exercises} htmlFor= {`${ex.Exercises}_${ex.risk}`}>
            <div key={ex.Exercises} className="relative flex items-start py-4">
            <div className={` min-w-0 flex-1 text-sm leading-6`}>
            <div 

            onClick={()=>{

            if(selected[aray[assist]].indexOf(ex.id)==-1){
                var newselect= {...selected}
                    newselect[aray[assist]].push(ex.id)
                    
                    setSelected({...newselect})

            }else if( selected[aray[assist]].indexOf(ex.id)!=-1){
            
                    var newselect= {...selected}
                    newselect[aray[assist]].splice(newselect[aray[assist]].indexOf(ex.id),1)
                
                    setSelected({...newselect})


            }

            }}

            className={`p-5 ${selected[aray[assist]].includes(ex.id)?"bg-green-50":""} cursor-pointer  select-none font-medium text-gray-900 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}>

            {ex.Exercises} 


            </div>
            </div>
            <div className="ml-3 flex h-6 items-center">

            <input
            id={`${ex.id}`}
            name={`${ex}`}
            onChange={(event)=>{
                console.log(event.target.checked)
                const isChecked = event.target.checked;
                selected[aray[assist]].includes(ex.id)
                if(isChecked &&  selected[aray[assist]].indexOf(ex.id)==-1){
                    //SET TO STATE
                    var newselect= {...selected}
                    newselect[aray[assist]].push(ex.id)
                    
                    setSelected({...newselect})
                    


                }
                else if (isChecked==false){
                    if(isChecked &&  selected[aray[assist]].indexOf(ex.id)!=-1){
                        var newselect= {...selected}
                        newselect[aray[assist]].splice(newselect[aray[assist]].indexOf(ex.id),1)
                    
                        setSelected({...newselect})


                    }

                }
                
            }}

            type="checkbox"
            className="sr-only h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            </div>
            </div>
            </label>
                <br>
                </br>
                </div>

            }


            })}


</div>
       
        <br></br>
        <div className="sticky bottom-0 left-0">

        {alert&&<Alert></Alert>}
           
        </div>
       

        






    </div>
  )
}

export default Results