import { useEffect, useState } from "react";
import "./index.css"
import background1 from "../../images/1.jpg";
import background2 from "../../images/2.jpg";
import background3 from "../../images/3.jpg";
import background4 from "../../images/4.jpg";
import background5 from "../../images/5.jpg";
import prof1 from "../../images/prof1.png";
import prof2 from "../../images/prof2.png";
import prof3 from "../../images/prof3.png";
import prof4 from "../../images/prof4.png";
import prof5 from "../../images/prof5.png";
import insta from "../../images/SVG Click Img/instagram.png"
import fb from "../../images/SVG Click Img/facebook.png"
import linkedin from "../../images/SVG Click Img/linkedin.png"
import arrow from "../../images/arrow.png"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../../components/navbar";

const Homepage=()=>{
    let [angle, setAngle] = useState(-10);
    let [radius, setradius] = useState(150);
    let [background, setbackground] = useState(background1);
    let [bigpic , setbigpic] = useState(prof1);
    let [proftext , setproftext] = useState("Krishna Mahato");
    let [fblink , setfblink] = useState("https://www.facebook.com/profile.php?id=100037359223501")
    let [instalink , setinstalink] = useState("https://www.instagram.com/krishhnaaaaaaaa_/")
    let [linkedinlink , setlinkedinlink] = useState("https://www.linkedin.com/in/krishna-mahato")
    let [hero , sethero] = useState({
        quote : "It’s fine to celebrate success but it is more important to heed the lessons of failure.",
        about : "KRISHNA MAHATO",
        skills : "Web Developer , Freelancer , Undegrad Student, SOAU"
    })  
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
        className="home"
        style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${background})`,
            transition: "1s",
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
            <div
            style={{
                background: `url(${bigpic})`,
                borderRadius: "50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }} 
            id="mid-photo">
            </div>
            <div 
            id="prof-text">
                {proftext}
            </div>
            <hr style={{color: "white",
                        width: "10rem",
                        position: "absolute",
                        bottom: "5.5%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        }} />
            
            <svg height="402" width="402">
            <circle
                r= {`${radius}`}
                cx="201"
                cy="201"
                strokeWidth="1px"
                stroke="#fff"
                fill="none"
                style={{
                strokeDasharray: "1256",
                strokeDashoffset: "0",
                transition: "1s",
                }}
                id="svgcircle"
            />
            </svg>
            <div id="social-links">
                <a href={`${instalink}`} target="_blank"><img className="social-img" src={insta} id="insta" /></a>
                <a href={`${fblink}`} target="_blank"><img className="social-img" src={fb} id="fb" /></a>
                <a href={`${linkedinlink}`} target="_blank"><img className="social-img" src={linkedin} id="linkedin" /></a>
            </div>
            
            <div id="circleBox" z>
            <span
                onClick={() => {
                setradius(200);
                setTimeout(() => {
                    setradius(150);
                }, 1000);
                setbackground(background1);
                setbigpic(prof1);
                setproftext("Krishna Mahato");
                setfblink("https://www.facebook.com/profile.php?id=100037359223501");
                setinstalink("https://www.instagram.com/krishhnaaaaaaaa_/");
                setlinkedinlink("https://www.linkedin.com/in/krishna-mahato");
                sethero({
                    quote: "It’s fine to celebrate success but it is more important to heed the lessons of failure.",
                    about: "KRISHNA MAHATO",
                    skills: "Web Developer , Freelancer , Undegrad Student, SOAU",
                })
                }}
                style={{
                background: `url(${prof1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                left: `${200 * Math.sin(degrees_to_radians(angle)) - 23}px`,
                bottom: `${200 * Math.cos(degrees_to_radians(angle)) + 80}px`,
                }}
                id="step1"
            ></span>
            <span
                onClick={() => {
                setradius(200);
                setTimeout(() => {
                    setradius(150);
                }, 1000);
                setbackground(background2);
                setbigpic(prof2);
                setproftext("Ankit Singh Rajput");
                setfblink("#");
                setinstalink("#");
                setlinkedinlink("#");
                sethero({
                    quote: "I have not failed. I’ve just found 10,000 ways that won’t work.",
                    about: "ANKIT SINGH RAJPUT",
                    skills: "Undegrad Student, SOAU",
                })
                }}
                style={{
                background: `url(${prof2})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                left: `${200 * Math.sin(degrees_to_radians(angle + 72)) - 23}px`,
                bottom: `${
                    200 * Math.cos(degrees_to_radians(angle + 72)) + 80
                }px`,
                }}
                id="step2"
            ></span>
            <span
                onClick={() => {
                setradius(200);
                setTimeout(() => {
                    setradius(150);
                }, 1000);
                setbackground(background3);
                setbigpic(prof3);
                setproftext("Jay Prakash Pathak");
                setfblink("#");
                setinstalink("#");
                setlinkedinlink("#");
                sethero({
                    quote: "Logic will get you from A to B. Imagination will take you everywhere.",
                    about: "JAY PRAKASH PATHAK",
                    skills: "Full Stack Developer , Android Developer , Freelancer , Undegrad Student, KMPM",
                })
                }}
                style={{
                background: `url(${prof3})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
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
                setradius(200);
                setTimeout(() => {
                    setradius(150);
                }, 1000);
                setbackground(background4);
                setbigpic(prof4);
                setproftext("Abhishek Kabi");
                setfblink("#");
                setinstalink("#");
                setlinkedinlink("#");
                sethero({
                    quote: "Success is walking from failure to failure with no loss of enthusiasm.",
                    about: "ABHISHEK KABI",
                    skills: "Writer , Undegrad Student, IIT-KGP",
                })
                }}
                style={{
                background: `url(${prof4})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
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
                setradius(200);
                setTimeout(() => {
                    setradius(150);
                }, 1000);
                setbackground(background5);
                setbigpic(prof5);
                setproftext(`We are always open to new Members`);
                setfblink("#");
                setinstalink("#");
                setlinkedinlink("#");
                sethero({
                    quote: "There is no power for change greater than a community discovering what it cares about.",
                    about: "JOIN THE COMMUNITY!",
                    skills: "We request you to join the discord community!",
                })
                }}
                style={{
                background: `url(${prof5})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
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
            <div id="quote">
                " {hero.quote} "
            </div>
            <br />
            <div id="about">
                {hero.about} :)
            </div>
            <br />
            <div id="skills">
                || {hero.skills} ||
            </div>
            </div>
        </div>
        <img id = "arrow" src={`${arrow}`}/>
        <a href="https://discord.gg/U3YA4eJAMN" target="_blank">
            <div id="discord" >
            <svg id="discord-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245 240"><path d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"/><path d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"/></svg>
                JOIN NOW
            </div>
        </a>
        <div id="box3">
            <Navbar />
        </div>
        </div>
    );
}

export default Homepage;