import React, { Component } from "react";

import DisplayCity from "./DisplayCity";
import "./Zip.css"

class Zip extends Component {

    constructor(props) {
        super(props);

        this.state = {
            zip: '',
            data: []
        }
    }

    handleChange = event => {
        const value = event.target.value;
        this.setState({
            zip: value
        })
    }
    async componentDidUpdate() {
        let url = "https://ctp-zip-api.herokuapp.com/zip/" + this.state.zip;
        let response = await fetch(url);
        const data = await response.json();
        console.log(data)
        this.setState({
            data: data
        })
    }
    render() {
        return (
            <div id="container">
                <div id="search">
                    <label id="zip-code">
                        Zip-Code:
                        <input id="zip" name="zip" type="text" placeholder="e.g. 10016" onChange={e => this.handleChange(e)} />
                    </label>
                </div>
                {
                    this.state.data.map((item) => {
                        return (
                            <DisplayCity key={item.RecordNumber} city={item.City} state={item.State} lat={item.Lat} long={item.Long} population = {item.EstimatedPopulation} 
                            wages = {item.TotalWages} country = {item.Country} region = {item.WorldRegion}/>
                        )
                    })
                }
            </div>

        )
    }
}

export default Zip;