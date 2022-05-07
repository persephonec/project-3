import React, { Component } from "react";


class One extends Component {
    render () {
        return (
            <div>
            <h2>Pride and Prejudice</h2>
            <h3>By Jane Austen</h3>

            <div>
            <p>{this.props.matchString}</p>
            </div> 
            
            </div>
        );
    }
}
export default One;