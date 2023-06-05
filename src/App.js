import React, { Component } from "react"
import Cardlist from "./Cardlist";
import { robots } from "./robots";
import Searchbox from "./Searchbox";




class App extends Component {
    constructor(){
        super()
        this.state = {
            robots : robots,
            searchfield : ''
        }
    }

    

    render(){
        return(
            <div className="tc">
                <h1>Robofriends</h1>
                <Searchbox/>
                <Cardlist robots={this.state.robots}/>
            </div>
        )
    }
; 
}

export default App 