//import { useState } from 'react'
import GridComponent from './components/GridComponent.tsx';
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
//import GridComponent from './components/GridComponent'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>sorteos ponle a la bola</h1>
      <div className="card">
        <div>
          <GridComponent />
        </div>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
