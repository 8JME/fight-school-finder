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

                </Jumbotron>
                <Navbar color="dark" sticky="top">
                    <NavbarBrand className="text-white">Fight School Finder</NavbarBrand>
                </Navbar>
            </div>
        );
    }
}

export default Header;
