import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [character, setCharacter] = useState(false);
  const [number, setNumber] = useState(false);
  const [password, setPassword] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  const passwordGenerate = useCallback(() => {
    let charList: string =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberList: string = "0123456789";
    const symbolList: string = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    if (number) {
      charList += numberList;
    }
    if (character) {
      charList += symbolList;
    }
    let password = "";
    for (let i: number = 0; i < length; i++) {
      const index = Math.floor(Math.random() * charList.length);
      password += charList.charAt(index);
    }
    setPassword(password);
  }, [length, character, number, setPassword]);

  function copyPassword() {
    ref.current?.select();
    navigator.clipboard.writeText(ref.current!.value);
  }

  useEffect(() => {
    passwordGenerate();
  }, [length, character, number, passwordGenerate]);

  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-2xl p-6 space-y-6">
          <h1 className="text-3xl font-bold text-center text-white mb-6">
            Password Generator
          </h1>

          <div className="flex gap-2">
            <input
              className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              readOnly
              value={password}
              ref={ref}
            />
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              onClick={copyPassword}
            >
              Copy
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <input
                type="range"
                className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                min={8}
                max={20}
                value={length}
                onChange={(e) => setlength(Number(e.target.value))}
              />
              <label className="text-white font-medium min-w-[80px]">
                Length {length}
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-600 cursor-pointer"
                onClick={() => setNumber(!number)}
              />
              <label className="text-white">Number</label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-600 cursor-pointer"
                onClick={() => setCharacter(!character)}
              />
              <label className="text-white">Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
