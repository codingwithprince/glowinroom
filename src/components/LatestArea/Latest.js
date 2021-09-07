import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Latest.css';

const infoData = [
    { title: "get rid of acne fast.",  category: "Skincare", img: "images/skincare/acne.jpg" },
    { title: "stop hair falling now.", category: "Hairstyle", img: "images/hairstyle/hairfall.jpg" },
    { title: "Make your teeth white.", category: "Skincare", img: "images/skincare/teeth.jpg" },
    { title: "Top 10 trending style.", category: "Style", img: "images/style/trend.jpg" },
    { title: "makeup tutorials.", category: "Makeup", img: "images/makeup/makeup.jpeg" },
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
    const {img, title, category} = props;
    return (
        <Col lg="4" md="6" sm="12">
            <Link className="fullLink" to={props.category}>
                <div className="latest-tip">
                    <div className="latest-img img-fluid d-flex justify-content-center">
                        <img src={img} alt="" />
                    </div>
                    <div className="latest-info">
                        <p className="category">{category}</p>
                        <h3 className="title">{title}</h3>
                    </div>
                    <p className="des">Click here to read the article.</p>
                </div>
            </Link>
        </Col>
    )
}
export default Latest;