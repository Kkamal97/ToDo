import React, { useState } from "react";
import ThingsToDo from "./ThingsToDo.jsx";
import ThingsCompleted from "./ThingsCompleted";
import Button from "./Button.jsx";
import AddNewToDo from "./AddNewToDo.jsx";

export const listContext=React.createContext();
function JavaPart(){
  const [newInput,setNewInput]=useState(false);
  
  const item=localStorage.getItem("chacha");

  let nyilist=[];
  if(item){
   nyilist=JSON.parse(item);
  }
  
console.log("tera",nyilist );
  
  const [list,setList]=useState(nyilist);
  console.log("kya hua tera",list );

const newList=list;



function newToDo(){
  setNewInput(true)

}

  return (<>
 <listContext.Provider value={{list,setList}}>
    {item && <ThingsToDo newList={newList}/>}
    <br></br>
    {newInput || <Button onClick={newToDo} className="rounded-2xl">+ Add a todo</Button>}
    {newInput &&  <AddNewToDo newInput={newInput} setNewInput={setNewInput} newList={newList}/> }
    <br></br>
    {/* <ThingsCompleted /> */}
    </listContext.Provider>
  </>
    
  )
}
export default JavaPart;