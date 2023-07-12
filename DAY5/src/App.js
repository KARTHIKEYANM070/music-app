import React, { Component } from "react";
import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import { MainContainer } from "./Components/MainContainer";
import { RightMenu } from "./Components/RightMenu";

class App extends Component {
  render() {
    return (
      <div>
  
   <RightMenu/>
         <LeftMenu/>
   <MainContainer />
   <div className="background"></div> 
      </div>
  
    );
  }
}

export default App;
