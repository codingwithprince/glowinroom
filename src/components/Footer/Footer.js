import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="section">
            <div className="footer-section">
                <Container>
                    <Row>
                        <Col lg="4" md="4" sm="12">
                            <div className="website-info">
                                <h2>GlowinRoom</h2>
                                <p>We tell people about all beauty secrets and experiences about life.</p>
                                <p className="mt-3"> <small> Subscribe to get notification of all latest tips from this website.</small></p>
                                <input type="text" className="form-control" placeholder="Enter Your Email." />
                                <button className="btn btn-danger mt-3">Subscribe</button>
                            </div>
                        </Col>
                        <Col>
                            <div className="quick-links">
                                <h3>Quick Links</h3>
                                <Link className="footer-link" to="/">Home</Link>
                                <Link className="footer-link" to="/skincare">Skincare</Link>
                                <Link className="footer-link" to="/hairstyle">Hairstyle</Link>
                                <Link className="footer-link" to="/makeup">Makeup</Link>
                                <Link className="footer-link" to="/style">Style and trends</Link>
                            </div>
                        </Col>
                        <Col>
                            <div className="contact-us">
                                <h3>Contact us</h3>
                                <p>Email:  <Link className="footer-link"  to="#"> codingwithprince@gmail.com</Link></p> 
                                <p>Phone:  <Link  className="footer-link" to="#"> +8801XXXXXXXX</Link></p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Container className="copyright">
                            <p>Developed by <a target="redirect" href="https://www.facebook.com/profile.php?id=100008591616145">Prince Ahmed </a></p>
                        </Container>
                    </Row>
                </Container>
            </div>

        </div>
    );
};

export default Footer;