import { useState } from "react";
import { Card, Accordion, Container, Row, Col, Button } from "react-bootstrap";


function App() {
  const [openAccordion, setOpenAccordion] = useState<string | null>('0');

  const toggleAccordion = (eventKey: string) => {
    setOpenAccordion(openAccordion === eventKey ? null : eventKey);
  };
  const accordionOpen = (eventKey: string) => {
    return openAccordion === eventKey;
  };

  return (
  <div className="container">
      <div className="whole"></div>
      <div className='top'>
        <Container fluid className="gx-5 gy-5">
        <Row className='justify-content-center align-items-center vh-100'>
        <Col md={6}>
          <Card className='p-2 content shadow'>      
            <Card.Header className="d-flex justify-content-left align-items-center gx-5">
              <span className="star">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" fill="none" viewBox="0 0 40 41"><path fill="#AD28EB" d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"/></svg>
              </span>
              <h1 className="header">FAQs</h1>
            </Card.Header>
            <Card.Body>
              <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header onClick={() => toggleAccordion('0')}>
                <span>What is Frontend Mentor, how will it help me?</span>
                  <Button 
                  variant="link" 
                  className="plus">
                    {!accordionOpen('0') ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>
                    )}
                    </Button>
                  </Accordion.Header>
                <Accordion.Body>
                  Frontend Mentor offers realistic coding challenges to
                  help developers improve their frontend coding skills
                  with projects in HTML, CSS and JavaScript. It's
                  suitable for all levels and ideal for portfolio
                  building.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header onClick={() => toggleAccordion('1')}>
                <span>Is Frontend Mentor free?</span>
                <Button 
                  variant="link" 
                  className="plus">
                    {!accordionOpen('1') ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>
                    )}
                    </Button>
                </Accordion.Header>
                <Accordion.Body>
                  Yes, Frontend Mentor offers both free and premium
                  coding challenges, with the free option providing
                  access to a range of projects suitable for all skill
                  levels.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header onClick={() => toggleAccordion('2')}>
                <span>Can I use Frontend Mentor Project in my portfolio?</span>
                <Button 
                  variant="link" 
                  className="plus">
                    {!accordionOpen('2') ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>
                    )}
                    </Button>
                </Accordion.Header>
                <Accordion.Body>
                Yes, you can use projects completed on Frontend Mentor
                in your portfolio. It's an excellent way to showcase
                your skills to potential employers!
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header onClick={() => toggleAccordion('3')}>
                <span>How can I get help if I'm stuck on a challenge?</span>
                <Button 
                  variant="link" 
                  className="plus">
                    {!accordionOpen('3') ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>
                    )}
                    </Button>
                </Accordion.Header>
                <Accordion.Body>
                The best place to get help is inside Frontend Mentor's
                Discord community. There's a help channel where you
                can ask questions and seek support from other
                community members.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div> 
    </div>
  )
}

export default App
