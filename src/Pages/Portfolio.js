import React from 'react';
import { PortfolioData } from './PortfolioData';
import * as Icons from "react-icons/fa"; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Portfolio.css';

function Portfolio() {

    return (
        <>
        <div>
            Portfolio
        </div>
            <Container>
                <Row>
                    {PortfolioData.map((item, index) => {
                        return(
                        <Col key={index}>
                            <Card className = {item.cName} style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                       {item.description}
                                    </Card.Text>
                                    <Button href={item.link} target="_blank" variant="outline-info">See it on <Icons.FaGithub/></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}

export default Portfolio


