import React, { Component } from "react";
import Cardlist from './Cardlist';
// import { robots } from './robots'; when we start using componentDidMount
import SearchBox from './SearchBox'
import Scroll from './Scroll'
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
        const filterRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        // what i the api was slow like very slow... then we can do
        if (this.state.robots.lenght === 0){
            return <h1> Loading </h1>
        } else{
            return(
                <div className="tc"> 
                    <h1 className="f1"> RoboFriends </h1>
                    < SearchBox searchChange={this.handleChange} />
                    <Scroll>
                        <Cardlist robots={filterRobots} />
                    </Scroll>
                </div>
            )
        }
        }
}

export default App