import React, { Component } from "react";
import Cardlist from '../component/Cardlist';
// import { robots } from './robots'; when we start using componentDidMount
import SearchBox from '../component/SearchBox'
import Scroll from '../component/Scroll'
import ErrorBoundry from "../component/ErrorBoundary";
import './App.css'

//  class contructors for search fields and app
class  App extends Component {
    
    //  note the app is the thing that can change program 
    //  constructor for serach fields
    constructor() {
        super()
        this.state = {
            robots: [],//before there is robots --> real life it should be empty [] due to componentDidMount() 
            searchField: ''
        }
    }

    // event handlers for  the robots
    handleChange = (e) => {
        this.setState({
            searchField: e.target.value
        })
       
    } 

    // due to having state above we call them smart component

    // setting up componentDidMount

    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots:users}))
    }
    render() {
        // search field implementation
        const { robots, searchField } = this.state
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        // what i the api was slow like very slow... then we can do
        return !robots.length ?
        <h1>Loading</h1> :

        (
            <div className="tc">
                <h1 className="f1"> RoboFriends </h1>
                < SearchBox searchChange={this.handleChange} />
                <Scroll>
                    <ErrorBoundry>
                        <Cardlist robots={filterRobots} />
                    </ErrorBoundry>
                </Scroll>
                   
            </div>
        )
        
    }
}

export default App