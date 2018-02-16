import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Character from './components/character/character.js';

ReactDOM.render(
    <Router>
        <div>
            <Route path="/" component={App} exact />
            <Route path="/people/:id" component={Character} />
        </div>
    </Router>, 
document.getElementById('root'));
