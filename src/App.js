import React, { Component } from "react"
import Cardlist from "./Cardlist";
import Searchbox from "./Searchbox";
import './App.css'
import { robots } from "./robots";



class App extends Component {
    constructor(){
        super()
        this.state = {
            robots : [],
            searchfield : ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                const allRobots = [...users, ...robots];
                this.setState({ robots: allRobots });
            });
    }


    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }    

    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length===0){
            return <h1 className="tc"> Loaiding </h1>
        } else{
            return(
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>
                    <Searchbox searchChange={this.onSearchChange}/>
                    <Cardlist robots={filteredRobots}/>
                </div>
            );
        };
    }; 
}

export default App 