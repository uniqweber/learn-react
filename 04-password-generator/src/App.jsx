import { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [number, setNumber] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const inputRef = useRef();
  const [showToast, setShowToast] = useState(false);

  const handleGenerate = useCallback(() => {
    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
      (number && "0123456789") +
      (specialChar && "!@#$%^&*()_+-=[]{}|;:,.<>?");
    setPassword(
      Array.from(
        { length },
        () => str[Math.floor(Math.random() * str.length)]
      ).join("")
    );
  }, [number, specialChar, length]);

  useEffect(() => handleGenerate(), [handleGenerate]);
  const copyText = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
    inputRef.current.select();
    window.navigator.clipboard.writeText(password);
  };

  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <div className="bg-white/10 text-rose-600 w-full max-w-xl rounded-md p-5 border border-white/20">
        <div className="flex justify-between gap-3">
          <input
            type="text"
            ref={inputRef}
            value={password}
            readOnly
            className="w-full outline-none bg-transparent border font-bold tracking-widest border-white/20 rounded-md p-3"
          />
          <button
            onClick={copyText}
            className="bg-white/10 text-white rounded-md px-5 py-3 border border-white/20 hover:bg-black duration-300 cursor-pointer"
          >
            Copy
          </button>
        </div>
        <div className="flex gap-3 mt-5">
          <div className="flex gap-2">
            <input
              type="range"
              min={8}
              max={24}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex gap-2">
            <input
              id="number"
              type="checkbox"
              onChange={() => setNumber(!number)}
            />
            <label htmlFor="number">Number</label>
          </div>
          <div className="flex gap-2">
            <input
              id="specialChar"
              type="checkbox"
              onChange={() => setSpecialChar(!specialChar)}
            />
            <label htmlFor="specialChar">Special Char</label>
          </div>
        </div>
      </div>
      <Toast showToast={showToast} />
    </div>
  );
};

export default App;

export const Toast = ({ showToast }) => {
  return (
    <div
      className={`bg-green-600 text-white px-5 py-1.5 rounded-full border-green-600 absolute bottom-5 duration-300 ${
        showToast ? "right-5" : " -right-32"
      } `}
    >
      Copied
    </div>
  );
};
