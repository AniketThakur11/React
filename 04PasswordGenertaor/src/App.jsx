import { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  // usecallback can use for memoization and optimization the function
  const PassWordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"
    }

    if (charAllowed) {
      str += "!@#$%^&*(){}+=[]`~"
    }

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length,
    numberAllowed, charAllowed, setPassword])

  const copyPasswordClipword = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 30)
    window.navigator.clipboard.writeText(password)
  }, [password])

  // useeffect use for rerender the dependices if any change in dependeices
  useEffect(() => {
    PassWordGenerator();
  }, [length,
    numberAllowed, charAllowed, PassWordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 text-center bg-gray-700'>
        <h1 className='text-4xl my-3 pt-3'>PassWordGenerator</h1>
        <div className='flex rounded-xl overflow-hidden mb-4 pb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 pt-4'
            placeholder='Password'
            readOnly
            ref={passwordRef} />
          <button
            onClick={copyPasswordClipword}
            className='outline-none bg-blue-700 text-white 
            px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 pb-4'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label>Length:{length}</label>
          </div>
          <div
            className='flex items-center gap-x-1 pb-4'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              className='cursor-pointer'
              onChange={() => { setNumberAllowed((prev) => !prev); }} />
            <label>Number:{numberAllowed}</label>
          </div>
          <div
            className='flex items-center gap-x-1 pb-4'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              className='cursor-pointer'
              onChange={() => { setCharAllowed((prev) => !prev); }} />
            <label>Character:{numberAllowed}</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
