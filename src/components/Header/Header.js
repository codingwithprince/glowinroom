import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { AiOutlineMenuFold  } from 'react-icons/ai';
import { Container, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap'; import Dropdown from '@restart/ui/esm/Dropdown';
import { Link } from 'react-router-dom';

const Header = () => {
   
    return (
        <div className="header-area">
            <div className="navbar-area" >
                <Navbar sticky="top" fixed="top" className="navbar" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">GlowinRoom</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav">
                            <span>
                            <AiOutlineMenuFold className="icon"/>
                            </span>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                            <Nav.Link eventKey="1" as={Link} to="/">Home</Nav.Link>
                                <NavDropdown title="Skincare" id="basic-nav-dropdown" >
                                    <NavDropdown.Item eventKey="1"  as={Link} to="/oilyskin">Oily Skin</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="1" as={Link} to="/skincare">Dry Skin</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="1" as={Link} to="/skincare">Facial</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="1" as={Link} to="/skincare">Body</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Hair Style" id="basic-nav-dropdown" >
                                    <NavDropdown.Item  eventKey="1" as={Link} to="/hairstyle">Hair Care</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="1" as={Link} to="/hairstyle">Haircut</NavDropdown.Item>
                                    <NavDropdown.Item  eventKey="1"as={Link} to="/hairstyle">Hair Growth</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="1" as={Link} to="/hairstyle">Hair Styling</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={Link} to="/hairstyle">Natural Hair</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Makeup" id="basic-nav-dropdown" >
                                    <NavDropdown.Item as={Link} to="/makeup">Face</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/makeup">Eyes</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/makeup">Brows</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/makeup">Lips</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/makeup">Nails</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Ask a makeup Artist</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Style" id="basic-nav-dropdown" >
                                    <NavDropdown.Item as={Link} to="/style">Cloths</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/style">Trends</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/style">Ornaments</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Shop Online</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link eventKey="1" as={Link} to="/reviews">Reviews</Nav.Link>
                                <Nav.Link eventKey="1" as={Link} to="/about">About</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
};

export default Header;