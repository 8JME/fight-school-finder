import React, {Component} from 'react';
import { Nav, Navbar, NavbarBrand,NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>FSF</h1>
                </Jumbotron>
                <Navbar color="dark" sticky="top">
                    <NavbarBrand className="text-white">Fight School Finder</NavbarBrand>
                </Navbar>
            </div>
        );
    }
}

export default Header;
