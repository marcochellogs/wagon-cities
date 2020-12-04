import React, { Component } from "react";
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render(){
    return(
      <div className="active-city">
        <h3>{this.props.activeCity.name}</h3>
        <p>{this.props.activeCity.address}</p>
        <img src={`http://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`} ></img>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  }
}

export default connect(mapStateToProps, null)(ActiveCity);
