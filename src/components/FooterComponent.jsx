import React from 'react';
import { Nav } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube,faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer(props){
    return (
        <Nav className="navbar fixed-bottom navbar-dark bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-3 text-center">
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>{' '}
                    </div>
                    <div className="col-3 text-center">
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/">
                            <FontAwesomeIcon icon={faFacebookF} size="lg" />
                        </a> {' '}
                    </div>
                    <div className="col-3 text-center">
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/">
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </a> {' '}
                    </div>
                    <div className="col-3 text-center">
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/">
                            <FontAwesomeIcon icon={faYoutube} size="lg" />
                        </a>
                    </div>
                </div>
            </div>
        </Nav>
    );
}

export default Footer;