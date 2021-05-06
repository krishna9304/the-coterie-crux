import react from "react";
import "./index.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

const Navbar = () => {
    let [classlist, setclass] = useState("");
    let add = (e , loc)=>{
        e.preventDefault();
        setclass("slide");
        setTimeout(() => {
            window.location = loc;
        }, 900);
    }
    return(
        <div>
            <div className= {`transition ${classlist}`} >
                <div className="cover cover1"></div>
                <div className="cover cover2"></div>
                <div className="cover cover3"></div>
            </div>
            <div id="container">
            <div id="logo">
                <h2>CRUx</h2>
            </div>
            <div id="menu">
                <ul>
                <Link to="/" onClick={(e)=>{
                    add(e , "/");
                }} style={{ color: 'rgba(255, 255, 255, 0.644)'}} ><li>HOME</li></Link>
                <Link onClick={(e)=>{
                    add(e , "/service");
                }} to="/service" style={{ color: 'rgba(255, 255, 255, 0.644)' }} ><li>SERVICE</li></Link>
                <Link onClick={(e)=>{
                    add(e , "/about");
                }} to="/about" style={{ color: 'rgba(255, 255, 255, 0.644)' }} ><li>ABOUT</li></Link>
                <Link onClick={(e)=>{
                    add(e , "/contact");
                }} to="/contact" style={{ color: 'rgba(255, 255, 255, 0.644)' }} ><li>CONTACT</li></Link>
                <Link onClick={(e)=>{
                    add(e , "/help");
                }} to="/help" style={{ color: 'rgba(255, 255, 255, 0.644)' }} ><li>HELP</li></Link>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Navbar;