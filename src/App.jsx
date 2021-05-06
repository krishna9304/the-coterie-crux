import React from "react";
import "./styles.css"
import Homepage from "./pages/homepage";
import Helppage from "./pages/helppage";
import Servicepage from "./pages/servicepage"
import Aboutpage from "./pages/aboutpage"
import Contactpage from "./pages/contactpage"
import { Route, Switch} from "react-router-dom";
import { CSSTransition , TransitionGroup } from "react-transition-group";

export default function App() {
  return (
    <>
      <Route render={({location})=>(
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={500}
            classNames="fade"
          >
            <Switch location={location} >
            <Route path="/" exact>
              <Homepage />
            </Route>
            <Route path="/help" exact>
              <Helppage />
            </Route>
            <Route path="/about" exact>
              <Aboutpage />
            </Route>
            <Route path="/service" exact>
              <Servicepage />
            </Route>
            <Route path="/contact" exact>
              <Contactpage />
            </Route>
          </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </>
  )
}
