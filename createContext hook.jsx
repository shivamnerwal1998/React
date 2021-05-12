/* App.jsx starts
import React , {createContext} from "react" ;
import Comp1 from "./Comp1" ; 



/*
    in component create
    the provider component as we 
    create custom components 
    ex . <FirstName.Provider value={"data"}} >
            .. .. 
         </FirstName.Provider>
 */ 
const FirstName = createContext() ;
const App = ()=>{
    
    const elem = <div> <FirstName.Provider value={'Shivam'}>  
                        <Comp1/>
                    </FirstName.Provider>
                </div>
    return elem ; 

}
export {FirstName};  
export default App ;


   App.jsx ends */

/* Comp3 starts there are two more components in between */


import React from "react";
import { FirstName } from "./App.jsx";
import { LastName } from "./Comp1";

const Comp3 = () => {

    const elem = <><FirstName.Consumer >{(Name) => {
        const elem = <LastName.Consumer>{(Last) => {
            return <h1>Hello {Name} {Last}</h1>
        }
        }</LastName.Consumer>
        return elem;
    }}
    </FirstName.Consumer>
    </>
    return elem;
};
export default Comp3;

/* If we give white space between
consumer Arrow function then it give Error
try to focus on that
 */

	

*/ 
/** USing useContext :-
	import React,{useContext} from "react";
import { FirstName } from "./App.jsx";
import { LastName } from "./Comp1";

const Comp3 = () => {
const Name = useContext(FirstName);
const LName = useContext(LastName);
const elem = <h1> Hello {LName}{Name} </h1>
return elem  ;  

   
};
export default Comp3;
*/
