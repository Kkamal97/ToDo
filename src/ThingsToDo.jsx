import React, { useContext } from "react";
import { listContext } from "./JavaPart";
function ThingsToDo ({newList}){
  
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