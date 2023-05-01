import React, { useContext } from "react";
import { listContext } from "./JavaPart";
function ThingsToDo (){
  const {list,setList}=useContext(listContext);
  console.log("list me ye h",list );
const newList=Object.values(list);
console.log("length check",newList.length );
  return(<>
  {newList.map(function(items){
return(<>
<br></br>
    <input type="checkbox" />
    <span>{items}</span>
    </>)
  }
  )
}
  </>)
}
export default ThingsToDo;