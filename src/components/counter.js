import React, { Component } from 'react';

class Counter extends Component {
    state = {
    	count: 0
    }

    handleDecrementCount = () => {
    	this.setState( { count: --this.state.count })
    }

    handleIncrementCount = () => {
    	this.setState( { count: ++this.state.count })
    }

	render() {
	return (
		<div>
		  <h1>{this.state.count}</h1>
		  <button onClick={() => this.handleDecrementCount('Parametr')}>Decrement</button>
		  <button onClick={this.handleIncrementCount}>Increment</button>
		</div>
	)
	}


}

export default Counter;