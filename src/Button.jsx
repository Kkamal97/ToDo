import React from "react";

function Button({children,onClick,className}){

    return (<>
<button className={"bg-yellow-500 hover:bg-orange-300 text-white px-4 py-2 rounded-md "+ className } onClick={onClick}>{children}</button >
    </>)
}
export default Button;