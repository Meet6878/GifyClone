import { useState } from "react";

const BGchange = () => {
  const [data,setData] = useState("red");

  const handleBGChange = (e,color)=>{
e.preventDefault();
console.log("color: " , color)
setData(color);
  }
console.log("data",data);
  return (
    <div style={{backgroundColor:data } }  className={`${data === "white" ? "text-black" : data === "yellow" ? "text-black" : ""} min-h-screen overflow-hidden`}>
      <div className="flex justify-between mt-2">
        <button className="border p-2 rounded-md" onClick={(e)=>handleBGChange(e,"yellow")}>yellow</button>
        <button className="border p-2 rounded-md" onClick={(e)=>handleBGChange(e,"green")}>green</button>
        <button className="border p-2 rounded-md" onClick={(e)=>handleBGChange(e,"blue")}>blue</button>
        <button className="border p-2 rounded-md" onClick={(e)=>handleBGChange(e,"black")}>black</button>
        <button className="border p-2 rounded-md" onClick={(e)=>handleBGChange(e,"white")}>white</button>
      </div>
    </div>
  );
};

export default BGchange;
