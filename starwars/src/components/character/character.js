import React from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';

import Card from '../card/card.js'

import './character.css';

export default class MovieCard extends React.Component {
    state = {
        character: null,
      };
    
      componentDidMount() {
        const id = this.props.match.params.id;
    
        axios
          .get(`https://swapi.co/api/people/${id}`)
          .then(response => this.setState(() => ({ character: response.data })))
          .catch(error => {
            console.error(error);
          });
          
      }
    
      render() {
        const id = this.props.match.params.id;
        if(!this.state.character) {
          return <div>Loading movie information...</div>
        }
        return (
          <div>
            <Card index={id-1} character={this.state.character} />
          </div>
        );
      }
    }