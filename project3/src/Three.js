import React, { Component } from "react";


class Three extends Component {
    render () {
        return (
            <div>
            <h2>Twilight</h2>
            <h3>By Stephanie Meyer</h3>

            <div>
            <p>{this.props.matchString}</p>
            </div> 
            
            </div>
        );
    }
}
export default Three;