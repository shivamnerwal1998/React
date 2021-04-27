/* This all work is done at App.jsx file 

/* STARTING WITH  HOOKS     */


import React,{useState} from "react" ;
import ReactDOM from "reactDOM" ; 

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

           
    
    return(<div>
            <h1>count : {count} </h1>
            <button onClick={IncCount}>increment</button>
            <button onClick={DecCount}>decrement</button>
         </div>
    ) ; 
}
ReactDom.render(
    <App/>
,document.getElementById("root")) ;  
