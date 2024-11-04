import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"


import Editor from '@monaco-editor/react';


function App() {
  const [isLoad,setIsLoad] = useState(false);

  return (
    <>
      <div>
      <Button disabled={isLoad} onClick={()=>{setIsLoad(true); setTimeout(()=>setIsLoad(false),3000)}} >
          {isLoad &&  <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Click Shad
          </Button>
      </div>
      <br />
      <div>
        {/*
        https://microsoft.github.io/monaco-editor/typedoc/interfaces/editor.IStandaloneEditorConstructionOptions.html
        https://www.npmjs.com/package/@monaco-editor/react
        */}
        {/*
        https://ui.shadcn.com/docs/components/menubar
        https://lucide.dev/icons/
        */}
      <Editor height="90vh" width="50vw" theme="vs-dark" 
        options={{renderWhitespace: "all", fontSize:18, wordWrap:"on", }} 
        defaultLanguage="javascript" defaultValue="// some comment" />
      </div>
      
    </>
  )
}

export default App
