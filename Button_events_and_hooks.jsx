/* This all work is done at App.jsx file 

/* STARTING WITH  HOOKS     */


import React,{useState} from "react" ;
import ReactDOM from "react-dom" ; 

const App= ()=>{

 /*
    use state is a function which returns a Array with two items 
    the first one is state object and second is  function 
 */ 

    let [count,SetCount]= useState(10) ; 

    /*
     10 initial value , count current value and 
    by the help of setCount function we can change the value of count
   the value which passed in setCount is current value of count 
    */

/*  change the paramerter of useSate and analyse the console  */
    const IncCount = ()=>{
        count++ ; 
        SetCount(count); 
    } 
    const DecCount = () =>{
        count-- ; 
         SetCount(count); 
    }
/**************** submitting name by button ******************** /
/* only taking input  */

import React,{useState} from "react";
import ReactDOM from "react-dom" ; 
function App() {
const [name,setName] = useState("");
const [fullName,setFullName] = useState("") ; 
    
const inputEvent=(event)=>{
    
    setName(event.target.value);

}
const getName=()=>{
  setFullName(name); 
}
    const element = <div>
        <h1> Hello {fullName}</h1>
         <input type="text" placeholder="Enter Your Name "
             onChange={inputEvent}  
             value={name}   
         />
         <button onClick={getName}> Display</button>


    </div>
    return element ; 
}

ReactDOM.render(
<App/>,document.getElementById("root"));
           
    
    return(<div>
            <h1>count : {count} </h1>
            <button onClick={IncCount}>increment</button>
            <button onClick={DecCount}>decrement</button>
         </div>
    ) ; 
}
ReactDOM.render(
    <App/>
,document.getElementById("root")) ;  
