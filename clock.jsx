import React from "react" ;
import ReactDOM from "react-dom";


function Clock(props)
{
  const element = <>
                      <h1>Hello {props.Name}</h1>
                      <h2>Time : {props.date.toLocaleTimeString()}</h2>
                      <h3>Byee</h3>
                  </>
  return element ; 
}

function display()
{
  ReactDOM.render(
    <Clock Name = "shivam Nerwal" date = {new Date()} />
    , document.getElementById("root")
  );
}
setInterval(display,1000);  
