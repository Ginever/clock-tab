import { useState } from 'react';
import './App.css'
import { useDate } from './clock'
import AnalogClock from './components/AnalogClock';

function App() {
  const time = useDate()
  const [isDigital, setIsDigital] = useState(true)
  
  return (
    <>
    <div className='center'>
      <button className="isDigitalButton" onClick={() => setIsDigital(!isDigital)}></button>
      {isDigital ? 
      <table>
        <tbody>
          <tr>
            <td>
              <table>
                <tbody>
                  <td className='time'>{time.hour[0]}</td>
                  <td className='time-mono'>{time.hour[1]}</td>
                  <td className='time'>:</td>
                  <td className='time-mono'>{time.minute}</td>
                  <td className='time'>:</td>
                  <td className='time-mono'>{time.second}</td>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td><p className='date'>{time.date}</p></td>
          </tr>
        </tbody>
      </table> 
        :
      <AnalogClock key="hello" time={time}/>
      }
    </div>
    </>
  )
}

export default App
