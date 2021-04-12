import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import './About.css';



function About() {

    return (
        <>

            <Container></Container>
            <Container></Container>
            <Container className='tabContainer'>
                <Row>
                    <Col></Col>
                    <Col className='tabContent' lg={8}>
                        <Tabs
                            defaultTab="one"
                            onChange={(tabId) => { console.log(tabId) }}
                        >
                            <TabList>
                                <Tab tabFor="one">About Me</Tab>
                                <Tab tabFor="two">Experience</Tab>
                                <Tab tabFor="three">Education/Certifications</Tab>
                            </TabList>
                            <TabPanel tabId="one">
                                <p>Through hard work, perseverance, and dedication. I was able to reach an upper management position in the restaurant industry.</p>
                                <p>Now I strive to replicate my success in web development. In my time in the customer service industry I’ve learned a lot, and I believe my experience in problem solving,
                                     making creative decisions and the ability to work and communicate with any type of person, translate very well to the world of programming.</p>
                                <p>I have always had an interest and passion for technology and chose to go to Centriq to turn my passion into a career that is challenging but rewarding. Programming intrigued me because I love the prospect of building something I can be proud of and working with a team to solve problems or create new ideas. When you hire me, you are hiring someone who is passionate and dedicated to his craft, with the desire and ability to learn new things and will be a valuable asset to your team</p>
                            </TabPanel>
                            <TabPanel tabId="two">
                                <h4>NIC</h4>
                                <p><i>Developer I</i> (current)</p>
                                <ul>
                                    <li>Worked effectively within an Agile environment and focused on sprint goal delivery</li>
                                    <li>Designed and developed the platform with self-service, automation and performance in mind</li>
                                    <li>Developed using the defined best practices and standards</li>
                                    <li>Assisted in the research process and function related to assigned tasks</li>
                                    <li>Met with users to problem solve and define needs and requirements</li>
                                    <li>Troubleshoot/debug issues that arose from upgrades or new feature deployments</li>
                                    <li>Configured workflows and provided other ServiceNow automation features through the use of clientand server side scripting with JavaScript</li>
                                    <li>Assisted in identifying and analyzing system solutions available through ServiceNow</li>
                                    <li>Reviewed options with users and agreed on design</li>
                                    <li>Assisted in site administration duties (schedule changes, report building, Request/Task completion)</li>
                                </ul>
                                <h4>NIC</h4>
                                <p><i>Servicenow Developer Intern</i></p>
                                <ul>
                                    <li>Worked effectively within an Agile environment and focused on sprint goal delivery</li>
                                    <li>Designed and developed the platform with self-service, automation and performance in mind</li>
                                    <li>Developed using the defined best practices and standards</li>
                                    <li>Assisted in the research process and function related to assigned tasks</li>
                                    <li>Configured workflows and provided other ServiceNow automation features through the use of clientand server side scripting with JavaScript</li>
                                    <li>Assisted in site administration duties (schedule changes, report building, Request/Task completion)</li>
                                </ul>
                            </TabPanel>
                            <TabPanel tabId="three">
                                <h4>Education</h4>
                                <p>Centriq Training</p>
                                <p><i>April 2018 - July 2018</i></p>
                                <p>Fullstack Web Development</p>

                                <h4>Certifications:</h4>
                                
                                
                                <p><i>ITILv4 Foundations</i></p>
                            </TabPanel>
                        </Tabs>
                    </Col>
                    <Col></Col>

                </Row>
            </Container>


        </>
    )
}

export default About;