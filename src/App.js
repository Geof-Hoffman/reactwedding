import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import WeddingThings from './components/WeddingThings';
import { THINGS } from './shared/things';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        things: THINGS
    };
}
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Forever Jess & Geoff</NavbarBrand>
                </div>
                </Navbar>
                <WeddingThings things={this.state.things} />
            </div>
        );
    }
}

export default App;
