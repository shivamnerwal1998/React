import React ,{useState} from "react" ;

const Form =()=>{  
 /* use state mai space do aur name placeholder
  observe karo */   
   const [Name , setName ] =  useState({
       FName : "" , 
       LName : "" , 
       Email : "" , 
       Contact : "" 
   }); 

    
   const inputData = (event)=> {

       const value = event.target.value ;
       const name = event.target.name ;



       setName( (preValue)=> {               
           return { ...preValue , 
                    [name] : value     // go to bottom 
                 } ; 
        }
    );
 }
           
    

     
    const submissionStatus = (event)=>{
        event.preventDefault(); 
        alert("Form Submitted ") ; 
    }


       
    const Data = <div>  <form onSubmit={submissionStatus}>
                        <h2> Welcome {Name.FName} {Name.LName}  </h2>
                        <h4>{Name.Contact}</h4>
                        <h4>{Name.Email}</h4>

                        <input type="text" placeholder="Enter First Name" 
                          name = "FName"
                          onChange = {inputData}
                          value={Name.FName}
                          
                       
                        />
                        <br/>
                        
                        <input type="text" placeholder="Enter Last Name" 
                            name = "LName" 
                            onChange={inputData}
                            value={Name.LName}
                            
                        
                        />
                        <br/>
                        <input type="email" placeholder="Enter Email Id"   name = "Email"
                              onChange={inputData}
                            value = {Name.Email}
                        />
                         <br/>
                        <input type="tel" placeholder="Enter mobile number"
                        name="Contact"
                        onChange={inputData}
                        value ={Name.Contact}></input>                 

                        <br/>
                        <button type="submit">Submit</button>
                    
                </form>
                </div>
                
    return Data ;  
}
export default Form ; 
   
/*   
    You might have not understand 
    this thing  [name] : value
   and how it works  . well  this is a new way to assign values
   in objects that was introduced in es6 .
   So what's happening is
that you are adding a new key in the object 
(or in this case updating the original value with the new one ) 
     .  So that's why putting [ name ] : value changes the fname .  
 */
