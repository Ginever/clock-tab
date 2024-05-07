
import { Helmet } from 'react-helmet'
import './App.css'
import { useDate } from './clock'
function App() {
  const time = useDate()
  
  return (
    <>
    <Helmet>
      <title>{time.time} : Clock Tab</title>
    </Helmet>
    <div className='center'>
      <table>
        <tbody>
          <tr>
            <table>
              <tbody>
                <td className='time-mono'>{time.hour}</td>
                <td className='time'>:</td>
                <td className='time-mono'>{time.minute}</td>
                <td className='time'>:</td>
                <td className='time-mono'>{time.second}</td>
              </tbody>
            </table>
          </tr>
          <tr>
            <p className='date' >{time.date}</p>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default App
