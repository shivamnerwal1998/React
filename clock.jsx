/*
  props : as attributes in html and js 
          props are used to set property in jsx element 
*/ 
import React from "react" ;
import ReactDOM from "react-dom";


function Clock(props)
{
  const element = <>
                      <h1>Hello {props.Name}</h1>   // ek se jyada b de sakte hai 
                      <h2>Time : {props.date.toLocaleTimeString()}</h2> // isko bade dhyaan se karna hai    
                      <h3>Byee</h3>
                  </>
  return element ;   // return karne ka naya tareeka 
}

function display()
{
  ReactDOM.render(
    <Clock Name = "shivam Nerwal" date = {new Date()} />  /* Setting props  */ 
    , document.getElementById("root")
  );
}
setInterval(display,1000);  /* clock has its own timer and updates itself in every second  */
// display function is called every second

/*
  setInterval(()=>{
    ReactDOM.render(
    {/* preferred */}
    ,document.getElementById("root")) ; 
  },1000)
*/
