import { useEffect, useState } from "react";
import "./styles.css";
import background1 from "./images/1.jpg";
import background2 from "./images/2.jpg";
import background3 from "./images/3.jpg";
import background4 from "./images/4.jpg";
import background5 from "./images/5.jpg";

export default function App() {
  let [angle, setAngle] = useState(-10);
  let [offset, setoffset] = useState(1256);
  let [background, setbackground] = useState(background1);
  let degrees_to_radians = (degrees) => {
    var pi = Math.PI;
    return degrees * (pi / 180);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((angle) => angle - 0.1);
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${background})`,
        transition: "600ms",
      }}
    >
      <div id="box1">
        <svg height="402" width="402">
          <circle
            r="200"
            cx="201"
            cy="201"
            strokeWidth="1px"
            stroke="grey"
            fill="none"
          />
        </svg>
        <svg height="402" width="402">
          <circle
            r="100"
            cx="201"
            cy="201"
            strokeWidth="1px"
            stroke="#fff"
            fill="none"
            style={{
              strokeDasharray: "1256",
              strokeDashoffset: `${offset}`,
              transition: "1s",
            }}
          />
        </svg>
        <div id="circleBox" z>
          <span
            onClick={() => {
              setoffset(1256);
              setTimeout(() => {
                setoffset(0);
              }, 1000);
              setbackground(background1);
            }}
            style={{
              left: `${200 * Math.sin(degrees_to_radians(angle)) - 23}px`,
              bottom: `${200 * Math.cos(degrees_to_radians(angle)) + 80}px`,
            }}
            id="step1"
          ></span>
          <span
            onClick={() => {
              setoffset(1256);
              setTimeout(() => {
                setoffset(0);
              }, 1000);
              setbackground(background2);
            }}
            style={{
              left: `${200 * Math.sin(degrees_to_radians(angle + 72)) - 23}px`,
              bottom: `${
                200 * Math.cos(degrees_to_radians(angle + 72)) + 80
              }px`,
            }}
            id="step2"
          ></span>
          <span
            onClick={() => {
              setoffset(1256);
              setTimeout(() => {
                setoffset(0);
              }, 1000);
              setbackground(background3);
            }}
            style={{
              left: `${
                200 * Math.sin(degrees_to_radians(angle + 2 * 72)) - 23
              }px`,
              bottom: `${
                200 * Math.cos(degrees_to_radians(angle + 2 * 72)) + 80
              }px`,
            }}
            id="step3"
          ></span>
          <span
            onClick={() => {
              setoffset(1256);
              setTimeout(() => {
                setoffset(0);
              }, 1000);
              setbackground(background4);
            }}
            style={{
              left: `${
                200 * Math.sin(degrees_to_radians(angle + 3 * 72)) - 23
              }px`,
              bottom: `${
                200 * Math.cos(degrees_to_radians(angle + 3 * 72)) + 80
              }px`,
            }}
            id="step4"
          ></span>
          <span
            onClick={() => {
              setoffset(1256);
              setTimeout(() => {
                setoffset(0);
              }, 1000);
              setbackground(background5);
            }}
            style={{
              left: `${
                200 * Math.sin(degrees_to_radians(angle + 4 * 72)) - 23
              }px`,
              bottom: `${
                200 * Math.cos(degrees_to_radians(angle + 4 * 72)) + 80
              }px`,
            }}
            id="step5"
          ></span>
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
