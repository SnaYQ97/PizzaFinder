import {useState} from 'react'
import {ReactComponent as ReactLogo} from './assets/icons/react.svg'
import {ReactComponent as ViteLogo} from './assets/icons/vite.svg'
import './App.css'
import {Button} from "./components/button";


const App = () => {
  const [count, setCount] = useState(0)

  return (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <ViteLogo className="logo" alt="Vite logo"/>
          </a>
          <a href="https://react.dev" target="_blank">
            <ReactLogo className="logo react" alt="React logo"/>
          </a>


        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <Button onClick={() => setCount((count) => count + 1)} variant={"contained"}>count is {count}</Button>
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
