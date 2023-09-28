import { Component } from 'react';

import './App.css';
import CardList from '../components/Cardlist/Cardlist';
import SearchBox from '../components/Searchbox/Searchbox';
import Scroll from '../components/Scroll/Scroll';
import { robots } from "../robots";


class App extends Component{
  constructor(){
    super();

    this.state={
      monsters:[],
      searchInput:''
    }
  }

  componentDidMount(){
    console.log('component didmount')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then(users=>this.setState(()=>{
        const allRobots = [...users, ...robots];
        return {monsters:allRobots} 
      })
    )

  }

  onSearchChange = (event) =>{
    this.setState({searchInput:event.target.value})
  }; 

  render(){
    const {monsters,searchInput} = this.state;
    const {onSearchChange} = this;

    let filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchInput.toLowerCase())
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Box</h1>
        <SearchBox 
          className='monsters-search-box' 
          onSearchChange={onSearchChange} 
          placeholder='Search Monsters'/>
        <Scroll>
          <CardList className="display"  filteredMonsters={filteredMonsters} />
        </Scroll>
      </div>
    );
  }
}

export default App;
