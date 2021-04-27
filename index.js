/* only taking input  */

import React,{useState} from "react";
import ReactDOM from "react-dom" ; 
function App() {
 /* Always take care about functional components and useState() should 
    be placed wisely 
 */ 
const [name,setName] = useState(""); // array destructor ko 
    

 /* Argument, kaise aaya ? */ 
const inputEvent=(event)=>{
    setName(event.target.value);
}
    const element = <div>
        <h1> Hello{name}</h1>
         <input type="text" placeholder="Enter Your Name "
             onChange={inputEvent}   // argument ?  
         />


    </div>
    return element ; 
}

ReactDOM.render(
<App/>,document.getElementById("root"));
