
import './App.css'
import { useDate } from './clock'

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12];

function App() {
  const time = useDate()
  
  return (
    <>
    <div className='center'>
      <table>
        <tbody>
          <tr>
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
          </tr>
          <tr>
            <p className='date'>{time.date}</p>
          </tr>
          <tr>
            <AnalogClock time={time}/>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

function AnalogClock({time}) {
  
  return (
    <svg height="300" width="95%">
      <ellipse cx="50%" cy="50%" rx="45%" ry="150" />
      <line stroke="green" x1="50%" y1="50%" x2={conventHoursToLine(time.hour, time.minute).x} y2={conventHoursToLine(time.hour, time.minute).y} />
      <line stroke="blue" x1="50%" y1="50%" x2={conventMinuetsToLine(time.minute, time.second).x} y2={conventMinuetsToLine(time.minute, time.second).y} />
      <line stroke="red" x1="50%" y1="50%" x2={conventSecondsToLine(time.second).x} y2={conventSecondsToLine(time.second).y} />
      <circle cx="50%" cy="50%" r="1"/>
      {numbers.map((e) => (<ClockText number={e} />))}
    </svg>
  )
}
function conventSecondsToLine(minutes) {
  const a = -Math.PI*(minutes - 30)/30
  const x = (Math.sin(a)/2 + 0.5) * 80 + 10;
  const y = (Math.cos(a)/2 + 0.5) * 80 + 10;

  return {x: x + "%", y: y + "%"};
}

function conventMinuetsToLine(minutes, seconds) {
  const a = -Math.PI*(Number(minutes) + (seconds/60) - 30)/30
  const x = (Math.sin(a)/2 + 0.5) * 70 + 15;
  const y = (Math.cos(a)/2 + 0.5) * 70 + 15;

  return {x: x + "%", y: y + "%"};
}

function conventHoursToLine(hours, minutes) {
  const a = -Math.PI*(Number(hours) + (minutes/60) - 6)/6
  const x = (Math.sin(a)/2 + 0.5) * 40 + 30;
  const y = (Math.cos(a)/2 + 0.5) * 40 + 30;

  return {x: x + "%", y: y + "%"};
  
}

function ClockText({number}){

  const a = -Math.PI*(number - 6)/6
  const x = (Math.sin(a)/2 + 0.5) * 80 + 10;
  const y = (Math.cos(a)/2 + 0.5) * 80 + 10;

  return(
    <text y={y+"%"} x={x+"%"} stroke="red" fill="#149414" font-size="30">{number}</text>
  )
}

export default App
