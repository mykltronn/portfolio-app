import React, { Component } from 'react';
import Sidebar from './Sidebar.js';
import {biggenStyles} from '../styles/inlineStyles.js'
import {colors} from '../styles/inlineStyles.js'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.embiggen = this.embiggen.bind(this)

        this.state = {
            embiggened: false,
            colors: colors.drab,
            style: null
        }
    }

    embiggen(event) {
        this.setState({embiggened: true})
        this.setState({style: biggenStyles})
        this.setState({colors: colors.deepMauve})
    }

    render() {
        let bigStyle = this.state.style
        let colors = this.state.colors
        return (
            <div className="main-box">
                <Sidebar text="Home" />
                <div onClick={this.embiggen} style={bigStyle} className="content-box">
                    <div style={{backgroundColor: colors.primary}} className="content-background">

                        <h1 style={{color: colors.fontNormal}}>Content</h1>
                        <h5 style={{color: colors.fontNormal}}>this is a bit of fake content</h5>
                        <p style={{color: colors.fontNormal}}>eventually, some real stuff will go here and that'll be neat I suppose.</p>
                        <p style={{color: colors.fontNormal}}>It's even conceivable that an img could go in here. Like this one:</p>
                        <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/>

                    </div>
                </div>
            </div>
        );
    }
}
