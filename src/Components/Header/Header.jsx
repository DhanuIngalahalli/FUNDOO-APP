import React, { Component } from 'react'
import './Header.css'

export class Header extends Component {

constructor(props){
    super(props)

    this.state = {
        message:"Good Morning",
        arr:[1,2],
        count:0
    }
}
    render() {
        return (
            <div>
                <p>hello world {this.state.message} {this.state.arr}</p>
            </div>
        )
    }
}

export default Header
