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
        <Col lg="4" md="6" sm="12">
            <Link className="fullLink" to={category}>
                <div className="latest-tip">
                    <div className="latest-img img-fluid d-flex justify-content-center">
                        <img src={img} alt="" />
                    </div>
                    <div className="latest-info">
                        <p className="credit"><small>Photo Credit:  {credit}</small></p>
                        <p className="category">{category}</p>
                        <h3 className="title">{title}</h3>
                    </div>
                    <p className="des">Click here explore more.</p>
                </div>
            </Link>
        </Col>
    )
}

export default Makeup;