import React from "react";
import JavaPart from "./JavaPart.jsx"
import Button from "./Button.jsx";
import photo from "./picture.jpg";
function ToDo (){
const tarikh=new Date().toDateString();
const time=new Date().toLocaleTimeString();
console.log("date check",tarikh );
const keys=Object.keys(tarikh);
console.log("keys",keys );
  return(<>
<div className="flex flex-row items-center justify-center space-x-2">
  <h1 className="text-2xl">XTodo</h1> 
  <span className="flex flex-grow"></span>
  <img src={photo} className="w-12"/>
   <div>
    <p>{tarikh}</p>
      <p>{time}</p>
      </div>
      </div>
      
    <div className="flex flex-row">
     <h2 className="font-black text-3xl">Things to get done</h2>
     <span className="flex grow"> 
     </span>
    <Button>Refresh</Button >
     
      </div> 
     <JavaPart />
        </>)
}
export default ToDo;