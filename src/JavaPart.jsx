import React, { useState } from "react";
import ThingsToDo from "./ThingsToDo.jsx";
import ThingsCompleted from "./ThingsCompleted";
import Button from "./Button.jsx";
import AddNewToDo from "./AddNewToDo.jsx";

export const listContext=React.createContext();
function JavaPart(){
  const [newInput,setNewInput]=useState(false);
  
  const item=localStorage.getItem("chacha");
  console.log("dekho to kya ara",item );
  const nyilist=JSON.parse(item)
  const [list,setList]=useState(nyilist);
  
  // const {list,setList}=useContext(listContext);
  console.log("list me ye h",list );
const newList=list;
const length=newList.length;
console.log("length check",length );
  
  // newList.push();
// console.log("ye rhi array",array)



function newToDo(){
  setNewInput(true)
// console.log("check check mike");
}

  return (<>
 <listContext.Provider value={{list,setList}}>
    <ThingsToDo newList={newList}/>
    <br></br>
    {newInput || <Button onClick={newToDo} className="rounded-2xl">+ Add a todo</Button>}
    {newInput &&  <AddNewToDo newInput={newInput} setNewInput={setNewInput} newList={newList}/> }
    <br></br>
    <ThingsCompleted />
    </listContext.Provider>
  </>
    
  )
}
export default JavaPart;