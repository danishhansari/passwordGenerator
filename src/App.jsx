import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import "./style.css";
import { BiRefresh } from "react-icons/bi";
import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);

  // useRef for copying text
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0987654321";
    if (characterAllowed) str += "!@#$%^&*()~`{}?";

    for (let i = 1; i < length; i++) {
      let randomChar = Math.floor(Math.random() * str.length + 1);
      pass += str[randomChar];
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const handleButtonClick = () => {
    passwordGenerator();
  };
  return (
    <>
      <div className="bg-[#0a2d4d] w-full min-h-screen pb-4">
        <Navbar />

        <Banner />

        <div className="password-generator max-w-2xl mx-auto my-4 text-white  ">
          <label htmlFor="password">Generator password:</label>
          <input
            type="text"
            className="block w-full mt-2 rounded-lg focus:border-none focus:outline-none text-[#121111] p-4 text-center text-3xl"
            id="textInput"
            readOnly
            value={password}
            ref={passwordRef}
          />
          <div className="flex items-center justify-center gap-4 my-4">
            <button
              disabled="disabled"
              className="border-2 border-gray-600 py-2 px-2 md:py-2 md:px-4 text-sm rounded-full w-full "
            >
              Random Password
            </button>
            <BiRefresh
              className="text-[4em] hover:rotate-[150deg] transition-all"
              onClick={handleButtonClick}
            />
            <button
              className="bg-blue-600 py-1 px-2 text-md md:py-2 md:px-4 rounded-full w-full"
              onClick={copyToClipboard}
            >
              Copy Password
            </button>
          </div>

          <div className="bg-[#0000003e] flex gap-8 items-center justify-center py-6 text-xl flex-wrap md:flex-nowrap px-4">
            <label htmlFor="length">Length</label>
            <input
              type="range"
              className=""
              name="length"
              id="length"
              min={8}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <p>{length}</p>

            <div className="flex gap-4 flex-wrap md:flex-nowrap w-full items-center justify-center">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="w-6 h-6 rounded-lg focus:border-none focus:outline-none"
                  name="number"
                  id="number"
                  onClick={() => setNumberAllowed((prev) => !prev)}
                />
                <label htmlFor="number">Number</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="w-6 h-6 rounded-lg focus:border-none focus:outline-none"
                  name="symbol"
                  id="symbol"
                  onClick={() => setCharacterAllowed((prev) => !prev)}
                />
                <label htmlFor="symbol">Symbol</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
