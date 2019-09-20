import React, { Component } from 'react'

class classClick extends Component {
    clickHandler()
    {
        console.log('button clicked');
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me now</button>
            </div>
        )
    }
}

export default classClick
