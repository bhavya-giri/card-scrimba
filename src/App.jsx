import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Top from './components/Top'
import Bottom from './components/Bottom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Top/>
     <Bottom/>
    </div>
  )
}

export default App
