import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
      <section id='home'>
            <Container fluid className="banner">
                <Row  className="d-flex justify-content-center align-items-center">
                    <Col lg={10}>
                      <Carousel>
                        <Carousel.Item interval={2000} >
                         <img
                              className='d-block w-100'
                              src={require('../Assets/bg1.png')}
                              alt="first-slide" fluid
                              />
                             <Carousel.Caption>
                               <h3>First slide label</h3>
                               <p className='d-none d-sm-block'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                             </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                        <img
                              className='d-block w-100'
                              src={require('../Assets/bg2.png')}
                              alt="first-slide" fluid
                              />
                            <Carousel.Caption>
                              <h3>Second slide label</h3>
                              <p className='d-none d-sm-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                       </Carousel.Item>
                       <Carousel.Item interval={2000}>
                       <img
                              className='d-block w-100'
                              src={require('../Assets/bg3.png')}
                              alt="first-slide" fluid
                              />
                            <Carousel.Caption>
                              <h3>Third slide label</h3>
                              <p className='d-none d-sm-block'>
                              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                              </p>
                           </Carousel.Caption>
                       </Carousel.Item>
                 </Carousel>
            </Col>
        </Row>
        <div className='text-center'>
          <h2 className='display-6 mt-3 fw-bold fs-3'>Your Dream Vacation is Here!</h2>
        </div>
     </Container>
    </section>
     );
           
    }

export default Banner