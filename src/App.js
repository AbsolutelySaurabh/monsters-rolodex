import React from 'react';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.components'
import './App.css';

class App extends React.Component{
  
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    //this.handleChange = this.handleChange.bind(this)
  }

  //component lifecycle method
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users }));
  }

  // handleChange(e) {
  //   this.setState({searchField: e.target.value});
  // }; 

  /*
  Note : good rule is use arrow functions on any class methods you define and aren't part of 
  React (i.e. render(), componentDidMount()).
  */

  handleChange = (e) => {
    //this way we do not need to bind(this context)
    //error function auto binds to the context where it's defined
    this.setState({searchField: e.target.value});
  }

  render(){
    /*
    Whenever the state changes, this functon render() called
    */

    //destructuring : converting objects to constants
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder = "search monsters"
          handleChange = {this.handleChange}
        />
        <CardList monsters = {filteredMonsters}/>
      </div>
    );
  }
}

export default App;
