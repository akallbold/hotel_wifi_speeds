import React, { Component } from 'react';
import {connect} from "react-redux"

class MainContainer extends Component {


  render() {
    return (
      <div className="App">
        Hello!
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
