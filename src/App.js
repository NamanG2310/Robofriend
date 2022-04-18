import { Component } from "react/cjs/react.production.min";
import Cardlist from "./Cardlist";
import './App.css';
// import react from "react";
// import { robots } from './robots';  
import Search from './Search';
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],     //robots:robots, //we dont want a array stored in the pc fo we fetch the array form site
            searchfield: '',
        }
    }
    onchange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    componentDidMount() {            //this is a lifecycle function which runs after the rander method.
        fetch('https://jsonplaceholder.typicode.com/users')       //pre define function.
        .then(Response => Response.json())
        .then(users => { this.setState({ robots: users }) })
    }
    render() {
        const filterrobo = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (

            <div className="tc bg-navy">
                <h1 className="f1">robofriends</h1>
                <Search searchchange={this.onchange} />
                <Cardlist robots={filterrobo} />
            </div>
        );
    }

}
export default App;