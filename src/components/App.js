import React from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import Scroll from './Scroll.js'
import ErrorBoundary from './ErrorBoundary'
import './Scroll.css'

import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => this.setState({robots: data}));
}
        

    onSearchChange = (event) => {
        this.setState({searchField : event.target.value})
        //console.log(event.target.value);
        
    }
    
    render() {
        const { robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !robots.length ? 
        <h1 className='tc'>Loading</h1> :
    (
        <div className='tc'>
          <h1>RoboFriends</h1>
          <SearchBox 
            searchChange={this.onSearchChange}
          />
          
          <Scroll>
            <ErrorBoundary>
               <CardList robots={filteredRobots} />  
            </ErrorBoundary>
          </Scroll>
        </div>
            )  
        }
    }

export default App;