import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Makeup.css';

const infoData = [
    { title: "Simple make up tutorials.",  credit: "YT/ Denitslava Makeup",  category: "Makeup", img: "https://i.ytimg.com/vi/0GzaX2781Tg/maxresdefault.jpg" },
    {title: "Eye Makeup guide.",credit: "YT/  Compilation plus", category: "Makeup" ,img: "https://i.ytimg.com/vi/pfVyPRtXQTM/maxresdefault.jpg"},
    {title: "Bridal makeup tutorials.",credit: "weddingbazar.com", category: "Makeup" ,img: "https://www.weddingbazaar.com/assets/vendor/21329/wm/638X3630516855001612159349.jpg"},
]



const Makeup = () => {
    return (
        <div className="section">
             <Container>
           <div className="latest-area">
                    <h2 className="section-title">Makeup tutorials</h2>
                    <hr />
                    <div className="latest-tips">
                        <Row>
                            {
                                infoData.map(data => <MakeupDesign  title={data.title} category={data.category} img={data.img} credit={data.credit}  />)
                            }
                        </Row>
                    </div>
                </div>
           </Container> 
        </div>
    );
};

const MakeupDesign = (props) => {
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

export default Makeup;