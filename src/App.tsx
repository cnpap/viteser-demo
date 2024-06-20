import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useMount} from "ahooks";
import {runInServer} from "./service.ts";

function App() {
  const [title, setTitle] = useState('')

  useMount(() => {
    runInServer('Viteser').then((res) => {
      setTitle(res)
    })
  })
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{title}</h1>
    </>
  )
}

export default App
