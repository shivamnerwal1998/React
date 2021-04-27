/* This all work is done at App.jsx file 
which is exporte to Index.js */ 

let count = 0 ; 
const IncCount = ()=>{
    count++; 
    console.log("Incremented"+count);
} 
const DecCount = () =>{
    if(count >  0){
        count-- ; 
        console.log("Decremented"+count) ;
        
    }
    else{
        console.log("Decrement Not Possible") ; 
    }
}

const App= ()=>{
    return(<div>
            <h1>count : {count} </h1>
            <button onClick={IncCount}>increment</button>
            <button onClick={DecCount}>decrement</button>
         </div>
    ) ; 
}
export default App ;
/* as the state  of count is changes on console but it will remain 0 where it is rendered */
// this change in state of elements can be carried out by using hooks 
