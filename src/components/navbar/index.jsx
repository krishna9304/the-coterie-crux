import react from "react";
import "./index.css"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return(
        <div className="box3" >
            <div className= {"transition"} >
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
                <NavLink className="nav-link-gdc" activeClassName="nav-link-gdc-active" to="/" ><li>HOME</li></NavLink>
                <NavLink className="nav-link-gdc" activeClassName="nav-link-gdc-active" to="/service" ><li>SERVICE</li></NavLink>
                <NavLink className="nav-link-gdc" activeClassName="nav-link-gdc-active" to="/about" ><li>ABOUT</li></NavLink>
                <NavLink className="nav-link-gdc" activeClassName="nav-link-gdc-active" to="/contact" ><li>CONTACT</li></NavLink>
                <NavLink className="nav-link-gdc" activeClassName="nav-link-gdc-active" to="/help" ><li>HELP</li></NavLink>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Navbar;