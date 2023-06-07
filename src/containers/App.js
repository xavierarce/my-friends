import React, { Component } from "react"
import Cardlist from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import './App.css'
import { robots } from "../robots";
import Scroll from "../components/Scroll"



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
                    <Scroll>
                        <Cardlist robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        };
    }; 
}

export default App 