import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { AiOutlineMenuFold  } from 'react-icons/ai';
import { Container, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap'; import Dropdown from '@restart/ui/esm/Dropdown';
import { Link } from 'react-router-dom';

const Header = () => {


    return (
        <div className="header-area">
            <div className="navbar-area">
                <Navbar className="navbar" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">GlowinRoom</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav">
                            <span>
                            <AiOutlineMenuFold className="icon"/>
                            </span>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Link to="/">Home</Link>
                                <NavDropdown title="Skincare" id="basic-nav-dropdown" >
                                    <NavDropdown.Item href="#action/3.1">Oily Skin</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Dry Skin</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Facial</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Body</NavDropdown.Item>
                            
                                </NavDropdown>
                                <NavDropdown title="Hair Style" id="basic-nav-dropdown" >
                                    <NavDropdown.Item href="#action/3.1">Hair Care</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Haircut</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Hair Growth</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Hair Styling</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Natural Hair</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Makeup" id="basic-nav-dropdown" >
                                    <NavDropdown.Item href="#action/3.1">Face</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Eyes</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Brows</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Lips</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Nails</NavDropdown.Item>


                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Ask a makeup Artist</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Style" id="basic-nav-dropdown" >
                                    <NavDropdown.Item href="#action/3.1">Cloths</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Trends</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Ornaments</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Shop Online</NavDropdown.Item>
                                </NavDropdown>
                                <Link className="route-link" to="/reviews">Reviews</Link>
                                <Link to="/about">About</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
};

export default Header;