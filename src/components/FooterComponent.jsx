import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faGoogle, faYoutube,faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer(props){
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/directory">Directory</Link></li>
                            <li><Link to="/aboutus">About</Link></li>
                            <li><Link to="/contactus">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/">
                            <FontAwesomeIcon icon={faFacebookF} size="lg" />
                        </a> {' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/">
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </a> {' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/">
                            <FontAwesomeIcon icon={faYoutube} size="lg" />
                        </a>
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:+18885551234"><i className="fa fa-phone" /> 1-888-555-1234</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.com"><i className="fa fa-envelope-o" />info@fsf.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;