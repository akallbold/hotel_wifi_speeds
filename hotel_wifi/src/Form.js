import React, { Component } from 'react';
import {connect} from "react-redux"
import {changeFormValues} from "./actions"


class Form extends Component {

  render() {
    return (
      <div>
        <form>
          <div>
            <div>
              <input type="text" name= "upload_speed" value={this.props.upload_speed} onChange={this.props.changeFormValues}></input>
              <label>Upload Speed</label>
            </div>
            <div>
              <input type="text" name= "download_speed" value={this.props.download_speed} onChange={this.props.changeFormValues}></input>
              <label>Download Speed</label>
            </div>
          </div>
          <div>
            <div>
              <input type="text" name= "latency" value={this.props.latency} onChange={this.props.changeFormValues}></input>
              <label>Latency</label>
            </div>
          </div>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    latency:state.latency,
    download_speed: state.download_speed,
    upload_speed: state.upload_speed
  }
}

export default connect(mapStateToProps, {changeFormValues})(Form);
