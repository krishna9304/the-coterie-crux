import react from "react";
import Homepage from "./pages/homepage";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Helppage from "./pages/helppage";
import Servicepage from "./pages/servicepage"
import Aboutpage from "./pages/aboutpage"
import Contactpage from "./pages/contactpage"

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/help">
          <Helppage />
        </Route>
        <Route path="/about">
          <Aboutpage />
        </Route>
        <Route path="/service">
          <Servicepage />
        </Route>
        <Route path="/contact">
          <Contactpage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
