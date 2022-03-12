/*import logo from './logo.svg';*/
import './App.css';
import Light from "./component/Light";
import React, { useState} from "react";



function App() {
    const [click, setClick] = useState(0);/*состояния переходов*/
    const colorsTraffic = [ "red", "yellow", "green"];/*строчный массив цветов*/
    const [lights, setLights] = useState("grey")/*состояния для смены цвета*/
  return (
    <div className="traffic-light">
        {colorsTraffic.map((color) =>{
            return <Light color={color} lights={lights} setLights={setLights} click={click} setClick={setClick} />

        })}
    </div>
  );
}

export default App;
