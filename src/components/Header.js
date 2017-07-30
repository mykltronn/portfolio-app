import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        <div>
            <nav>
                <NavLink activeClassName="selected" className="nav-link" exact to="/">main</NavLink>
                <NavLink activeClassName="selected" className="nav-link" exact to="/about">about</NavLink>
                <NavLink activeClassName="selected" className="nav-link" exact to="/portfolio">portfolio</NavLink>
            </nav>
        </div>
    }
}
