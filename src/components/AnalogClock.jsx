import { useEffect, useState } from "react";

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12];

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

function AnalogClock({time}) {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    console.log(windowDimensions.height);
    return (
        <svg style={{aspectRatio: "1/1", position: "relative", top: 0, left: 0}} height={windowDimensions.height < windowDimensions.width ? "100%" : null} width={windowDimensions.height > windowDimensions.width ? "100%" : null}>
            <ellipse cx="50%" cy="50%" rx="49%" ry="49%" />
            {numbers.map((e) => (<ClockText number={e} />))}
            <line id="hour_hand" stroke="green" x1="50%" y1="50%" x2={conventHoursToLine(time.hour, time.minute).x} y2={conventHoursToLine(time.hour, time.minute).y} />
            <line id="minute_hand" stroke="blue" x1="50%" y1="50%" x2={conventMinuetsToLine(time.minute,time.second).x} y2={conventMinuetsToLine(time.minute, time.second).y} />
            <line id="second_hand" stroke="red" x1="50%" y1="50%" x2={conventSecondsToLine(time.second).x} y2={conventSecondsToLine(time.second, 0).y} />
            <circle cx="50%" cy="50%" r="1"/>
        </svg>
    );
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
    const x = (Math.sin(a)/2 + 0.5) * 85 + 7.5;
    const y = (Math.cos(a)/2 + 0.5) * 85 + 7.5;
  
    return(
      <text 
        key={"clock_number_" + number} 
        id={"clock_number_" + number} 
        y={y+"%"} 
        x={x+"%"} 
        stroke="orangered" 
        strokeWidth={1}
        fill="red" 
        fontSize="30" 
        transform={'translate(' + (number < 10 ? '-15' : '-7.5') +',16.25)'}>
          {number}
      </text>
    )
}

export default AnalogClock;