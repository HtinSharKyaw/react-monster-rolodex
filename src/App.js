import './App.css';
import React,{Component} from 'react';
import {CardList} from "./components/card-list/card-list.component.jsx";
import { SearchBox } from './components/search-box/search-box.component.jsx';

class App extends Component{
  constructor(){
    super();//it calls the constructor methods in the component class
    this.state = {
      monsters:[],
      searchField:''
    };
  }
    
  componentDidMount(){
    //console.log('component did mount is called');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}));
  }
  
  componentDidUpdate(){
    //console.log('component did update is called');
    console.log(this.state.searchField);
  }

  handleChange= e =>{
    this.setState({searchField:e.target.value})
  }

  render(){

    const {monsters,searchField}=this.state;
    const filterMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return(
      <div className="App">
      <SearchBox 
      placeholder='Search Monsters' 
      handleChange={this.handleChange}/>
      <CardList monsters={filterMonsters}/>
      </div>
    )
  }
}

export default App;
