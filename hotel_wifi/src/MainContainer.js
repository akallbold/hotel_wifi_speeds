import React, { Component } from 'react';
import {connect} from "react-redux"
import Form from './Form'

class MainContainer extends Component {


  render() {
    return (
      <div className="App">
        <p>Upon arriving to the hotel, please follow this link:</p>
        <a href="https://www.measurementlab.net/tests/ndt/" target="_blank">test</a>
        <p>and then enter your results in the follow fields:</p>
        <Form />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user:state.user
  }
}

export default connect(mapStateToProps)(MainContainer);
