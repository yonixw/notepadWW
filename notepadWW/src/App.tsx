import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"


function App() {
  const [count, setCount] = useState(0)
  const [isLoad,setIsLoad] = useState(false);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button variant={"outline"} disabled={isLoad} onClick={()=>setIsLoad(true)} >
          {isLoad &&  <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Click Shad
          </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
