import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDate } from './clock'

function App() {
  const [count, setCount] = useState(0)
  const time = useDate()

  return (
    <div className='center'>
      <p className='time'>{time.time}</p>
    </div>
  )
}

export default App
