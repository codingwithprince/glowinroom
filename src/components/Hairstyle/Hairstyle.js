import React from 'react';
import './Hairstyle.css';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const infoData = [
    {title: "get rid of hairfall", category: "Hair Style", img:"images/hairfall.jpg"}
]


const Hairstyle = () => {
    return (
        <div className="section">
            <Container>
           <div className="latest-area">
                    <h2 className="section-title">Hair Styles</h2>
                    <hr />
                    <div className="latest-tips">
                        <Row>
                            {
                                infoData.map(data => <HairstyleDesign title = {data.title} category={data.category} img={data.img}  / >)
                            }
                        </Row>
                    </div>
                </div>
           </Container> 
        </div>
    );
};

const HairstyleDesign =(props)=>{
return (
    <Col lg="4" md="6" sm="12" >
        <div className="latest-tip">
            <div className="latest-img d-flex justify-content-center">
                <img src={props.img} alt="" />
            </div>
            <p className="category">
                <Link to="/skincare">{props.category}</Link>
            </p>
            <p className="title">
                <Link to="/">{props.title}</Link>
            </p>
            <p className="description">Lorem ipsum dolor sit amet.</p>
        </div>
    </Col>
)
}
export default Hairstyle;