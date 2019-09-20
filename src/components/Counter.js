import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    
    inc(){
        this.setState({
            count: this.state.count + 1
        })
    }


    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.inc()} >Increment</button>
            </div>
        )
    }
}

export default Counter
