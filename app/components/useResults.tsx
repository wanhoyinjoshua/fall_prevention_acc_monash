import React from 'react'
import { useState,useEffect } from 'react'
import ex from "../utils/ex.json"
import RiskClass from '../utils/RiskClass'

const useResults = (data:any,assist:any) => {
    // I need to return the filtered exercises based on the difficulty
    //actually I need to compute all of them ...
    //data should be a json object 
    //loop through each exercise item
    const RiskClassifier= new RiskClass(data)
    const Risk_for_patient=RiskClassifier.Minibest_risk.isHighrisk
 

    function getRisk(data:any){

        return RiskClassifier.Minibest_risk

    }
    var ex_new= ex.map((ex:any)=>{
        //requirement 0 is easy 1 is harder
        //risk true is high risk false is low 
        var req=Number(ex.Requirements)
        

        if(Risk_for_patient==false){
            var newreq=req
           
            ex["risk"]=newreq*(assist*data.insight)
            ex["supervisionscore"]=(assist*data.insight)
            ex['taskdifficulty']=newreq
            return ex

        }else{

            var newreq=req+4
            ex["risk"]=newreq*(assist*data.insight)
            ex["supervisionscore"]=(assist*data.insight)
            ex['taskdifficulty']=newreq
            return ex

        }


       

        
        

    })



  return ex_new
}

export default useResults