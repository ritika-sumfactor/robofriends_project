import React, {useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

function App () {
  // constructor() {
  //   super()
  //   this.state = {
  //     robots: [],
  //     searchfield: ''
  //   }
  // }
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {setrobots({users})});
  })
  
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
   const { robots, searchfield } = this.state;
   const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
       })
        return !robots.length ?
        <h1>Loading</h1> :
        (
       <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
        <CardList robots={filteredRobots} />
        </Scroll>
        </div>
          );
      }


export default App;