export default class RiskClass {
    data: any;
   
    constructor(data:any) {
      this.data = data;
    }

    private cal_anticipatory(){
        var L_over_R= this.data["minibest_3_L"]>this.data["minibest_3_R"]
      return  ( 
        this.data["minibest_1"]+this.data["minibest_2"]+ this.data["minibest_3_R"]
        
        
        )
        
       
        


    }

    private cal_react_postural_control(){
       
        var L_over_R= this.data["minibest_6_L"]>this.data["minibest_6_R"]
      return  ( 
        this.data["minibest_4"]+this.data["minibest_5"]+ this.data["minibest_6_R"]
        
        
        )
        
       
        


    }

    private cal_sensory_orientation(){
       
        
      return  ( 
        this.data["minibest_7"]+this.data["minibest_8"]+ this.data["minibest_9"]
        
        
        )
        
       
        


    }

    private cal_dynamic_gait(){
       
        
        return  ( 
          this.data["minibest_10"]+this.data["minibest_11"]+ this.data["minibest_12"]+this.data["minibest_13"]+this.data["minibest_14"]
          
          
          )
          
         
          
  
  
      }

    private isHighRisk_Mini_best(age:any,score:any){
        if(age>=60||age<=69){
            //25is cutt of 
            if(score<=25){
                return true 

            }else{
                return false
            }

        }
        else if(age>=70||age<=79){
            //23 is cut off
            if(score<=23){
                return true 

            }else{
                return false
            }


        }
        else if(age>=80||age<=89){
            //22 is cut off 
            if(score<=22){
                return true 

            }else{
                return false
            }


        }
        else if(age>90){
            //17 is cutt off 
            if(score<=17){
                return true 

            }
            else{
                return false
            }


        }
        else if(age<60){
            //27 is cut off 
            if(score<=27){
                return true 

            }else{
                return false
            }


        }


    }

    get Minibest_risk() {

        var total= this.cal_anticipatory()+this.cal_dynamic_gait()+this.cal_react_postural_control()+this.cal_sensory_orientation()
        var isHighrisk=this.isHighRisk_Mini_best(this.data.age,total)
    
        return {
            "isHighrisk":isHighrisk,
             "score":total,
             "anticipatory":this.cal_anticipatory(),
             "dynamic_gait":this.cal_dynamic_gait(),
             "postural_control":this.cal_react_postural_control(),
             "sensory_orientation":this.cal_sensory_orientation()


            
            };
      }


  }