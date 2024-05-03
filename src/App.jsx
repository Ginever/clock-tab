
import './App.css'
import { useDate } from './clock'
function App() {
  const time = useDate()
  
  return (
    <div className='center'>
      <table>
        <tbody>
          <tr className='time'>{time.time}</tr>
          <tr><p className='date' >{time.date}</p></tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
