import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Hairstyle from '../Hairstyle/Hairstyle';
import Latest from '../LatestArea/Latest';
import Makeup from '../Makeup/Makeup';
import Skincare from '../SkinCare/Skincare';
import './Main.css';

const Main = () => {
    return (
        <div className="main-area">
            <Latest />
            <Skincare />
            <Hairstyle/>
            <Makeup />
        </div>
    );
};

export default Main;