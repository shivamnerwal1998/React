import React from "react"; 
import ReactDOM from "react-dom";

function Comp(prop)
{
  if( prop.Name == "Shivam" )
  {
    return <h1> Hello Shivam </h1> ; 
  }
  else if(prop.Name == "Jhonny")
  {
    return <h1>Hello Jhonny </h1> ; 
  }
  else{
    return <h1>Hello buddy </h1>
  }
  

}
ReactDOM.render(
  <>
  <Comp Name = "Shivam"/>
  <Comp Name = "Jhonny" />
  <Comp Name="Anupam"/>
  </>
  , document.getElementById("root") 
 )  ; 
