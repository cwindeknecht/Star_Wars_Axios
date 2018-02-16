import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import Card from './components/card/card.js'

class App extends Component {
  state = {
      starwarsChars: [],
  }
  componentDidMount() {
    this.loadFriends();
  }

  loadFriends = () => {
    axios
      .get('https://swapi.co/api/people')
      .then(response => {
        this.setState({
          starwarsChars: response.data.results,
        });
      })
      .catch(() => {
        console.error('error getting data');
      });
  };
  
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="Cards">
          {this.state.starwarsChars.map((character, index) => {
            return <Card 
            key={index} 
            character={character}
            index={index}
            />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
