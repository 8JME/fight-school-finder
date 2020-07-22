import React, { Component } from 'react';
import Header from './HeaderComponent';
import RenderCard from './CardComponent';
import Footer from './FooterComponent'
import { SCHOOLS } from '../data/schools'

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            temp: "temp-data",
            schools: SCHOOLS,
        }
    }

    render() {
        return (
        <>
            <Header />
            <RenderCard temp={ this.state.temp } schools={ this.state.schools } />
            <Footer />
        </>
        );
    }
}

export default Main;