import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Skincare.css';


const infoData = [
    { title: "For Oily skin", category: "Skincare", img: "images/skincare/oilyskin.png" },
    { title: "For Dry Skin", category: "Skincare", img: "images/skincare/dryskin.jpg" },
    { title: "Facial", category: "Skincare", img: "images/skincare/facial.jpeg" },
    { title: "Full body", category: "Skincare", img: "images/skincare/bodycare.jpeg" }
]

const Skincare = () => {
    return (
        <div className="section">
                       <Container>
           <div className="latest-area">
                    <h2 className="section-title">Skincare Tips</h2>
                    <hr />
                    <div className="latest-tips">
                        <Row>
                           {
                            infoData.map(data => <SkincareDesign title={data.title} category={data.category} img={data.img} />)
                            }
                        </Row>
                    </div>
                </div>
           </Container> 
        </div>
    );
};

const SkincareDesign = (props) => {
    return (
        <Col lg="3" md="6" sm="6" >
            <div className="skincare-tip">
                <div className="skincare-img d-flex justify-content-center">
                    <img src={props.img} alt="" />
                    <div className="overlay">
                        <p>{props.title}</p>
                    </div>
                    
                </div>
                <p className="sk-title">
                    <Link to="/">{props.title}</Link>
                </p>
            </div>
        </Col>
    )
}

export default Skincare;