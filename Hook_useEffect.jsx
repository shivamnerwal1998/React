import React,{useEffect, useState} from "react" ;

const Comp = () =>{
    
    const [Value,SetValue] = useState(0);
    useEffect(()=>{
        alert("I'am clicked ");
    } , [Value])
   /* if we not give value , what happen ?
      render and useEffect() 
      Api and useEffect ? 
   */
  
    const IncreaseValue = () => {
        SetValue((val)=>{return (Number(val)+1) }) ; 
    }
    const elem = <button  
    onClick={IncreaseValue}
    >{Value}</button>
    return elem ; 
}
export default Comp ;
