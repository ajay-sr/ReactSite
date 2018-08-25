import React, { Component } from 'react';
import './Navigation.css';

export default class Navigation extends Component {
    render() {
      return (
        <nav className="Navigation">
            <ul className="nav-elems">
                <li className="butt"><button className="button">1</button></li>
                <li className="butt"><button className="button">2</button></li>
                <li className="butt"><button className="button">3</button></li>
            </ul>
        </nav>
      );
    }
  }