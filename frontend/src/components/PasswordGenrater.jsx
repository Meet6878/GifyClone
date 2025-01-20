import { useState, useEffect } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(4);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  const generatePassword = () => {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+=-{}[]|:;<>,.?/~`";
    let Password = "";

    if (includeNumbers) letters += numbers;
    if (includeSpecialChars) letters += specialChars;

    for (let i = 1; i <= length; i++) {
      let chat = Math.floor(Math.random() * letters.length + 1);
      Password += letters[chat];
    }

    setPassword(Password);
  };

  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeSpecialChars]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4 text-center">
          Password Generator
        </h2>
        <div className="mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full p-2 rounded bg-gray-700 text-white outline-none mb-2"
          />
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
            Copy Password
          </button>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password Length: {length}</label>
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
            className="mr-2"
          />
          <label>Include Numbers</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={includeSpecialChars}
            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
            className="mr-2"
          />
          <label>Include Special Characters</label>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
