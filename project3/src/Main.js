import React, { Component } from "react";
import { 
    Route,
    Routes,
    NavLink,
    HashRouter 
} from "react-router-dom";
import One from "./One";
import Two from "./Two";
import Three from "./Three";


class Main extends Component {

    constructor (props) {
        super (props);
        this.state = {
            alert: 'Begin typing here to start the timer',
            userInput: '',
            wpm: 0.0,
            typingStarted: false          
        };
        
        this.page1Text='It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.';
        this.page1WordCount= 71;
        this.page2Text='In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.';
        this.page2WordCount= 53;
        this.page3Text='My mother drove me to the airport with the windows rolled down. It was seventy-five degrees in Phoenix, the sky a perfect, cloudless blue. I was wearing my favorite shirt - sleeveless, white eyelet lace; I was wearing it as a farewell gesture. My carry-on item was a parka.';
        this.page3WordCount= 50;
        this.getText = this.getText.bind(this);
        this.timerTick = this.timerTick.bind(this);
      
    }

    timerTick() {
        console.log(window.location.href);

        if ( window.location.href.endsWith('#/') ) {
            this.matchedText = this.page1Text;
            this.numWords = this.page1WordCount;
        }

        if ( window.location.href.endsWith('#/two') ) {
            this.matchedText = this.page2Text;
            this.numWords = this.page2WordCount;
        }

        if ( window.location.href.endsWith('#/three') ) {
            this.matchedText = this.page3Text;
            this.numWords = this.page3WordCount;
        }

        if ( this.state.userInput === this.matchedText )
        {
            this.setState({
                alert: 'User input matches required input.'
            });
            clearInterval(this.typingTimer);
            this.setState({
                wpm: (Math.round( ( ( this.numWords / this.props.countValue ) * 60.0 ) * 10) / 10)
            });
         
        }
        else
        {
            this.setState({
                alert: 'User input does not match required input.'
            });
        }

        this.props.increaseCount();

    }

    getText(e) {
        if ( this.state.typingStarted === false) {
            this.typingTimer = setInterval(this.timerTick, 1000);
            this.setState({
                typingStarted: true
            });
            this.setState({
                alert: 'Typing started.'
            });
        }

        this.setState ({
                userInput:e.target.value
        });
    }

    shouldComponentUpdate(newProps, newState) {
            console.log("shouldComponentUpdate: Should component update?")
            return true;
    }

    componentDidUpdate(currentProps, currentState) {
            console.log("componentDidUpdate: Component just updated!");
    }

    componentDidMount() {
    }

    componentWillUnmount() {
        clearInterval(this.typingTimer);
    }
   
    render() {
        var self = this;
        return (
            <HashRouter>
            <div>
                <h1>The Typing Tutor</h1>
                <h2>Choose a passage from a book to type</h2>
                <ul className="header">
                    <li><NavLink exact="true" to="/">Passage One</NavLink></li>
                    <li><NavLink to="/two">Passage Two</NavLink></li>
                    <li><NavLink to="/three">Passage Three</NavLink></li>
                </ul>
                <div className="content">
                    <Routes>
                    <Route exact path="/" element={<One matchString={this.page1Text} />}/>
                    <Route path="/two" element={<Two matchString={this.page2Text} />}/>
                    <Route path="/three" element={<Three matchString={this.page3Text} />}/>
                    </Routes>
                </div>
            </div>
            
            <form>
            <textarea name="typing_tutor" onChange={this.getText}
            ref={
                function(el){
                    self._input = el;
                }
            }
            placeholder="Start typing here..." rows="6" cols="163" required="required">
            </textarea>
            </form>
            <h2 className="message">{this.state.alert}</h2>
            <h3 className="center">Time: {this.props.countValue}</h3>
            <h3 className="center">Typing Speed was {this.state.wpm}  words per minute</h3>
            </HashRouter>
        );

    }
}
export default Main;