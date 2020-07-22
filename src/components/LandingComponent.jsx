import React from 'react';
import { Navbar, NavbarBrand, Jumbotron, Row } from 'reactstrap';
import Login from './LoginComponent';
import Footer from './FooterComponent';

function Landing() {

    return (
        <div className="">
            <div className="jumbotron">
                <div className="container">
                    <Row>
                        <div className="col-md-7 mt-5" >
                            <h1 className="landing-page-headers">Fight School Finder</h1>
                            <h3 className="landing-page-headers text-muted">Connect with schools and the world around you on FSF.</h3>
                        </div>
                        <div className="col-md-4 mt-5" >
                            <Login />
                        </div>
                    </Row>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Landing;