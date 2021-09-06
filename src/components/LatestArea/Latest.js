import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Latest.css';

const infoData = [
    { title: "get rid of acne.", category: "Skincare", img: "images/skincare/acne.jpg" },
    { title: "stop hair falling.", category: "Hair Style", img: "images/hairstyle/hairfall.jpg" },
    { title: "Make your teeth white.", category: "Skincare", img: "images/skincare/teeth.jpg" },
    { title: "Top 10 trending style.", category: "Style", img: "images/style/trend.jpg" },
    { title: "Wedding makeup tutorials.", category: "Makeup", img: "images/makeup/makeup.jpeg" },
    { title: "Remove facial hair.", category: "Skincare", img: "images/skincare/skincare.jpg" }
]

const Latest = () => {
    return (
        <div className="section">
            <Container>
                <div className="latest-area">
                    <h2 className="section-title">Latest Beauty Tips</h2>
                    <hr />
                    <div className="latest-tips">
                        <Row>
                            {
                                infoData.map(data => <LatestDesign title={data.title} category={data.category} img={data.img} />)
                            }
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    );
};

const LatestDesign = (props) => {
    return (
        <Col lg="4" md="6" sm="12" >
            <div className="latest-tip">
                <div className="latest-img d-flex justify-content-center">
                    <img src={props.img} alt="" />
                </div>
                <div className="latest-info">
                    <p className="category">
                        <Link to="/skincare">{props.category}</Link>
                    </p>
                    <p className="title">
                        <Link to="/">{props.title}</Link>
                    </p>
                </div>
                <div className="buttondiv d-flex justify-content-center">
                     <Link className="readBtn text-center" to="/">Read Article</Link>
                </div>
            </div>
        </Col>
    )
}
export default Latest;