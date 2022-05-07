import React, { Component } from "react";


class Two extends Component {
    render () {
        return (
            <div>
            <h2>The Hobbit</h2>
            <h3>By J.R.R. Tolkien</h3>

            <div>
            <p>{this.props.matchString}</p>
            </div> 
            
            </div>
        );
    }
}
export default Two;