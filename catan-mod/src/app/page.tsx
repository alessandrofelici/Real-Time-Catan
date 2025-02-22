'use client'
import { useState, useEffect } from "react";

export default function Home() {

  const [time, setTime]=useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (time == 20)
        setTime(0)
      else
        setTime(time + 1)
    }, 1000);

    return () => clearInterval(intervalId);
  });

  return (
    <body>
      <div className="header">
        <button className="hButton">Menu</button>
        <button className="hButton">Pause</button>
      </div>
      <div className="page">
        <div className="timer">
          <h1>clock</h1>
          <p>{time}</p>
        </div>
        <div className="die">
          <img src="https://i.imgur.com/sxNPtmG.png" width='200px' height='200px'/>
        </div>
      </div>
    </body>
  );
}
