import React, {Component} from "react";
import './Counter.css';

class Counter extends Component{
    render()
    {
        return(
            <div className="counter">
            <CounterButton by={1} incrementP={this.increment}></CounterButton>
            <CounterButton by={2} incrementP={this.increment}></CounterButton>
            <CounterButton by={-3} incrementP={this.increment}></CounterButton>
            <CounterButton by={-this.state.counter} incrementP={this.increment}></CounterButton>
            <span className="number">{this.state.counter}</span>
            </div>
        );
    }
    constructor(){
        super();
        this.state={counter:0};
        this.increment=this.increment.bind(this);
    }
    increment(inc)
    {
        this.setState({counter:this.state.counter+inc});
    }
}

class CounterButton extends Component {
    
    render()
    {
        return (
        <div className="counterButton">
            <button onClick={this.increment}>{this.props.by}</button>
        </div>
        );    
    }
    constructor(){
        super();
        this.increment=this.increment.bind(this);
    }
    increment()
    {
        this.props.incrementP(this.props.by)
    }
}

export default Counter;