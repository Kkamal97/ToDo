import React, { useContext, useState } from "react";
import Button from "./Button";
// ADDED BY (kaaml) [2023-04-28]:, 
import {listContext} from "./JavaPart";
function AddNewToDo ({newInput,setNewInput,newList}){
const [input,setInput]=useState();
const [inValue,setInValue]=useState();
const {list,setList}=useContext(listContext);
    function newMsg(e){
     setInput(e.target.value);
     setInValue(e.target.value);
    }


function saveLocal(){ 
    console.log("newlist ye h ",newList );
    const aglilist=[...newList];
   
    aglilist.push(input);
    setList(aglilist);
  const tt=JSON.stringify(aglilist);
  localStorage.setItem("chacha",tt);
  setInValue("");
    
}

    return <>
    <h2>Create a todo</h2>
    <input onChange={newMsg} value={inValue} placeholder="Write an article about Xstate" className="border border-gray-400 w-1/2 rounded-md placeholder:text-gray-700 "/>
    <br></br>
    <Button onClick={saveLocal}>Save</Button>
    <Button onClick={()=>setNewInput(false)} className=" border border-gray-700 bg-slate-100 text-gray-700">Cancel</Button>
    </>
}
export default AddNewToDo;