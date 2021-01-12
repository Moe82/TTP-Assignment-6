import React, { Component } from "react";

import "./DisplayCity.css"

class DisplayCity extends Component {
    render() {
        return (
            <div id = "city-cards">
                <h4>{this.props.city + ", " + this.props.state}</h4>
                <ul>
                    <li>State: {this.props.state}</li>
                    <li>Location: {"(" + this.props.lat + "," + this.props.long + ")"}</li>
                    <li>Population (Estimated): {this.props.population}</li>
                    <li>Total Wages: {this.props.wages}</li>
                    <li>Country: {this.props.country}</li>
                    <li>World Region: {this.props.region}</li>
                </ul>
            </div>
        )
    }
}

export default DisplayCity;