import { useState } from "react";
import "./styles.css";
import background1 from "./images/1.jpg"
import background2 from "./images/2.jpg"
import background3 from "./images/3.jpg"
import background4 from "./images/4.jpg"
import background5 from "./images/5.jpg"

export default function App() {
  let [offset , setoffset] = useState(1256);
  let [background , setbackground] = useState(background1);
  return (
    <div className="App" style={{backgroundImage : `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${background})` , transition: "600ms"}}>
      <div id="box1">
        <svg height = "402" width = "402">
          <circle r="200" cx="201" cy="201" stroke-width="1px" stroke="grey" fill="none" />
        </svg>
        <svg height = "402" width = "402">
          <circle r="200" cx="201" cy="201" stroke-width="1px" stroke="#fff" fill="none" style={{strokeDasharray: "1256", 
          strokeDashoffset: `${offset}`,
          transition: "1s"}} />
        </svg>
        <div id="circleBox">
          <span onClick={() => {if (offset===251) {
            setoffset(0);
            setbackground(background1);
          } 
          else if(offset===0) {
            setoffset(1256);
            setbackground(background1);
          }else{
            setbackground(background1);
          }}} id="step1"></span>
          <span onClick={() => {
            setoffset(1006);
            setbackground(background2)
            }} id="step2"></span>
          <span onClick={() =>{
            setoffset(754);
            setbackground(background3)
             }} id="step3"></span>
          <span onClick={() =>{
            setoffset(502);
            setbackground(background4)
             }} id="step4"></span>
          <span onClick={() =>{
            setoffset(251);
            setbackground(background5)
             }} id="step5"></span>
        </div>
      </div>

      <div id="box2">
        <div id="text">
          THE
          <br />
          COTERIE
          <br />
          CRUX
        </div>
      </div>

      <div id="box3">
        <div id="container">
          <div id="logo">
            <h2>CRUx</h2>
          </div>
          <div id="menu">
            <ul>
              <li>HOME</li>
              <li>SERVICE</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
              <li>HELP</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
