import React from 'react';
import logo from '../../images/logo192.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { AiOutlineMenuFold  } from 'react-icons/ai';
import { Container, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap'; import Dropdown from '@restart/ui/esm/Dropdown';

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
                                <Nav.Link href="/">Home</Nav.Link>
                                <NavDropdown title="Skin" id="basic-nav-dropdown" >
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Hair" id="basic-nav-dropdown" >
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Makeup" id="basic-nav-dropdown" >
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Style" id="basic-nav-dropdown" >
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/reviews">Reviews</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
};

export default Header;