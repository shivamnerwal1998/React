import React ,{useState} from "react" ;

const Form =()=>{  
 /* use state mai space do aur name placeholder
  observe karo */   
   const [Name , setName ] =  useState({
       FName : "" , 
       LName : "" 
   }); 

    
   const inputData = (event)=> {

       const value = event.target.value ;
       const name = event.target.name ;



       setName( (preValue)=> {
          if( name === "First_Name" ){ 
               return({
                   FName : value ,
                   LName : preValue.LName   
                 }) ;
            }
            else if( name === "Last_Name" ){ 
                return({
                    FName : preValue.FName ,
                    LName : value , 
                }) ;   
           }
           else{ 
               
               return({
                   FName:"00" ,
                   LName: "00"
               });
           }


         }
       );

    
    }


       
    const Data = <div>  <form >
                        <h2> Welcome {Name.FName} {Name.LName}  </h2>
                        <h3>Enter your Details : </h3>

                        <input type="text" placeholder="Enter First Name" 
                          name = "First_Name"
                          onChange = {inputData}
                          
                       
                        />
                        
                        <input type="text" placeholder="Enter Last Name" 
                            name = "Last_Name" 
                            onChange={inputData}
                            
                        
                        />
                        <br/>
                        <input type="text" placeholder="Enter Email Id"   name = "Email"/>
                      

                        <br/>
                        <button type="submit">Submit</button>
                    
                </form>
                </div>
                
    return Data ;  
}
export default Form ; 
