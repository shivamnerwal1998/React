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
          if( name === "First_Name" ){ 
               return({
                   FName : value ,
                   LName : preValue.LName ,  
                   Email : preValue.Email,
                   Contact : preValue.Contact 

                 }) ;
            }
            else if( name === "Last_Name" ){ 
                return({
                    FName : preValue.FName ,
                    LName : value ,
                    Email : preValue.Email,
                    Contact : preValue.Contact 
  
                }) ;   
           }
           else if( name === "email" ){
            return({
                FName : preValue.FName ,
                LName : preValue.LName ,
                Email : value ,
                Contact : preValue.Contact 

            }) ;   
           }
           else if( name === "contact" ){ 
               
               return({
                FName : preValue.FName ,
                LName : preValue.LName ,
                Email : preValue.Email,
                Contact : value 
            });
           }


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
                          name = "First_Name"
                          onChange = {inputData}
                          value={Name.FName}
                          
                       
                        />
                        <br/>
                        
                        <input type="text" placeholder="Enter Last Name" 
                            name = "Last_Name" 
                            onChange={inputData}
                            value={Name.LName}
                            
                        
                        />
                        <br/>
                        <input type="email" placeholder="Enter Email Id"   name = "email"
                              onChange={inputData}
                            value = {Name.Email}
                        />
                         <br/>
                        <input type="tel" placeholder="Enter mobile number"
                        name="contact"
                        onChange={inputData}
                        value ={Name.Contact}></input>                 

                        <br/>
                        <button type="submit">Submit</button>
                    
                </form>
                </div>
                
    return Data ;  
}
export default Form ; 
 css
 body{
  background-color: #f2f2f2;
}
form{
  text-align: center; 
  border-radius: 5px;
  padding: 40px;


}
input{
  text-align: center ;
  padding: 5px ;
  margin: 4px ; 
  width: 60% ; 
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

   
}
button{
  cursor:pointer ; 
  width:60% ; 
  padding: 5px ;
  margin: 4px ; 
  border: 1px solid #ccc;
  border-radius: 4px ;
  background-color:#4CAF50;
  color: white ;
}
button:hover{
  background-color:#45a049 ; 
}


