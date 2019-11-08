import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, BrowserRouter,Switch } from "react-router-dom";
import "animate.css/animate.min.css";
import Pulsa from "./View/Pulsa";
import PaketData from "./View/PaketData";
import PDAM from "./View/PDAM";
import BPJS from "./View/BPJS";
import TermAndCondition from "./View/TermAndCondition";
import FAQ from "./View/FAQ";

class App extends Component {
  render(){
    return(
      
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/pulsa" component={Pulsa}/>
          <Route exact path="/paketdata" component={PaketData}/>
          <Route exact path="/pdam" component={PDAM}/>
          <Route exact path="/bpjs" component={BPJS}/>
          <Route exact path="/terms" component={TermAndCondition}/>
          <Route exact patth="/faq" component={FAQ}/>
        </Switch>
        <Footer/>
        
      </BrowserRouter>
    )
  }
  
}
export default App;
