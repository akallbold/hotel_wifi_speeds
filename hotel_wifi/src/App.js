import React, { Component } from 'react';
import './App.css';
import MainContainer from "./MainContainer"
import {connect} from "react-redux"

class App extends Component {


  render() {
    return (
      <div className="App">
        <MainContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user:state.user
  }
}

export default connect(mapStateToProps)(App);
