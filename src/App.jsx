import { useState } from 'react';
import './App.css'
import { useDate } from './clock'
import AnalogClock from './components/AnalogClock';

function App() {
  const time = useDate()
  const [isDigital, setIsDigital] = useState(true)

  console.log(((60 - 55) < 9) ? "0" + (60 - 55) : 60 - time.second)
  
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
                  <td className='time'>{1 - time.hour[0]}</td>
                  <td className='time-mono'>{6 - time.hour[1]}</td>
                  <td className='time'>:</td>
                  <td className='time-mono'>{((59 - time.minute) <= 9) ? "0" + (59 - time.minute) : 59 - time.minute}</td>
                  <td className='time'>:</td>
                  <td className='time-mono'>{((59 - time.second) <= 9) ? "0" + (59 - time.second) : 59 - time.second}</td>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            {/* <td><p className='date'>{time.date}</p></td> */}
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
