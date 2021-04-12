import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as Icons from "react-icons/fa";
import { IconContext } from 'react-icons';


function Home() {
    return (
        <>
            <div className='home'>
                <IconContext.Provider value={{ color: '#fff' }}>
                    <Container className='name'>
                        <Row>
                            <Col lg={8}>

                            </Col>
                            <Col lg={4}>
                                <h1 id='greeting'>Alexander Roth</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={8}>

                            </Col>
                            <Col lg={4}>
                                <h1 id='greeting'>Fullstack Developer</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={8}></Col>
                            <Col className='socIcons' lg={4}>
                               {/*} <a href='https://www.facebook.com/alexander.roth4/' target="_blank" >
                                    <Icons.FaFacebookSquare />
    </a> May use later*/}

                                <a  href='https://www.linkedin.com/in/alex-roth-240065161/' target="_blank" >
                                    <Icons.FaLinkedin />
                                </a>

                                <a  href='https://github.com/acroth' target="_blank" >
                                    <Icons.FaGithub />
                                </a>

                                <a  href='https://codepen.io/RogueRoth' target="_blank" >
                                    <Icons.FaCodepen />
                                </a>

                            </Col>
                        </Row>
                    </Container>


                </IconContext.Provider>
            </div>
        </>
    )
}

export default Home;
