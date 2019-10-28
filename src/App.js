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

class App extends Component {
  render(){
    return(
      
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/pulsa" component={Pulsa}/>
          <Route exact path="/PaketData" component={PaketData}/>
          <Route exact path="/PDAM" component={PDAM}/>
          <Route exact path="/BPJS" component={BPJS}/>
        </Switch>
        <Footer/>
        
      </BrowserRouter>
    )
  }
  
}
export default App;
