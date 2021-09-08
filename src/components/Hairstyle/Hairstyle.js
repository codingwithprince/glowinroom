import React from 'react';
import './Hairstyle.css';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Latest from '../LatestArea/Latest';

const infoData = [
    {title: "get rid of hair falling.", credit: "Pexel.com", category: "Hairstyle", img:"images/hairstyle/hairfall.jpg"},
    {title: "hair growth tips for women.", credit: "Unknown", category: "Hairstyle", img:"https://i.ndtvimg.com/i/2015-04/hair_625x350_51429181118.jpg"},
    {title: "best hair cuts for girls.", credit: "i.ytimg.com",category: "Hairstyle", img:"https://i.ytimg.com/vi/nNInLwkdDIo/maxresdefault.jpg"},
    {title: "best hair colors for girls.", credit: "a-static.besthdwallpaper.com",category: "Hairstyle", img:"https://a-static.besthdwallpaper.com/twice-k-pop-band-members-in-fancy-you-mv-the-album-shoot-wallpaper-1280x720-62584_45.jpg"}
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
                                infoData.map(data => <HairstyleDesign title = {data.title} category={data.category} img={data.img} credit={data.credit} />)
                            }
                        </Row>
                    </div>
                 </div>
           </Container> 
        </div>
    );
};


const HairstyleDesign = (props) => {
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
export default Hairstyle;