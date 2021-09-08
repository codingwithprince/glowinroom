import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Latest.css';

const infoData = [
    { title: "get rid of acne fast.",  credit: "pexel.com",  category: "Skincare", img: "images/skincare/acne.jpg" },
    { title: "stop hair falling now.", credit: "pexel.com",  category: "Hairstyle", img: "images/hairstyle/hairfall.jpg" },
    { title: "Make your teeth white.", credit: "pexel.com",  category: "Skincare", img: "images/skincare/teeth.jpg" },
    { title: "Top 10 trending style.", credit: "pexel.com",  category: "Style", img: "images/style/trend.jpg" },
    { title: "makeup tutorials.", credit: "pexel.com", category: "Makeup", img: "images/makeup/makeup.jpeg" },
    { title: "Remove facial hair.",credit: "pexel.com",  category: "Skincare", img: "images/skincare/skincare.jpg" }
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
                                infoData.map(data => <LatestDesign title={data.title} category={data.category} img={data.img} credit={data.credit} />)
                            }
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    );
};

const LatestDesign = (props) => {
    const {img, title, category, credit} = props;
    return (
        <Col lg="6" md="6" sm="12">
            <Link style={{textDecoration:"none"}} to={category}>
                <Row className="latest-tip d-flex justify-content-center">
                    <Col sm="6" md="6" lg="6" xs="12" className=" d-flex justify-content-center">
                    <div className="latest-img">
                       <img src={img} alt="" className="img-fluid" />
                    </div>
                    </Col>
                    <Col className="latest-info d-flex">
                        <div className="innerInfo">
                            <h3 className="title">{title}</h3>
                            <p className="category">{category}</p>
                            <p className="credit"><small>Photo Credit:  {credit}</small></p>
                            <p className="des">Click here to read the article.</p>
                        </div>
                    </Col>
                </Row>
            </Link>
        </Col>
    )
}
export default Latest;

// const LatestDesign = (props) => {
//     const {img, title, category, credit} = props;
//     return (
//         <Col lg="4" md="6" sm="12">
//             <Link className="fullLink" to={category}>
//                 <div className="latest-tip">
//                     <div className="latest-img img-fluid d-flex justify-content-center">
//                         <img src={img} alt="" />
//                     </div>
//                     <div className="latest-info">
//                         <p className="credit"><small>Photo Credit:  {credit}</small></p>
//                         <p className="category">{category}</p>
//                         <h3 className="title">{title}</h3>
//                     </div>
//                     <p className="des">Click here to read the article.</p>
//                 </div>
//             </Link>
//         </Col>
//     )
// }