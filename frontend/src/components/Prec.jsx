import React, { useCallback, useEffect, useState } from "react";

const Prec = () => {
  const [inputlength, setInputLength] = useState(4);
  const [text, setText] = useState("");
  const [allowNumber, setIsAllowNumber] = useState(false);
  const [allowSpecial, setallowSpecial] = useState(false);

  const generatePassword = useCallback(()=>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let number = "0123456789";
    let symbol = "!@#$%^&*()-_=+[]{}|;:,.<>/?";
    let password = "";

    
if(allowNumber) str += number;
if(allowSpecial) str += symbol;
    for (let i = 0; i < inputlength; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
  password += str.charAt(char);  
  }

    setText(password);
    console.log("str",str);
    console.log("pass",password);
  },[inputlength,allowNumber,allowSpecial]);

  const handleCopie = async()=>{
    try {
const res = await navigator.clipboard.writeText(text);
  
    } catch (error) {
      console.log("error",error);
    }
  }

  useEffect(()=>{
    generatePassword();
  },[generatePassword])
 
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4 text-center">
          Password Generator
        </h2>
        <div className="mb-4">
          <input
            type="text"
            readOnly
            value={text}
            className="w-full p-2 rounded bg-gray-700 text-white outline-none mb-2"
          />
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded" onClick={handleCopie}>
            Copy Password
          </button>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password Length:{inputlength}</label>
          <input type="range" min="4" max="20" className="w-full" value={inputlength}  onChange={(e) => setInputLength(Number(e.target.value))} />
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" checked={allowNumber} onClick={()=>setIsAllowNumber((prv)=> !prv)} />
          <label>Include Numbers</label>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" checked={allowSpecial} onClick={()=>setallowSpecial((prev)=> !prev)} />
          <label>Include Special Characters</label>
        </div>
      </div>
    </div>
  );
};

export default Prec;
