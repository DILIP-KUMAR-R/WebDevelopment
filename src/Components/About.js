import React from 'react'
import {Col, Container, Row, Button } from 'react-bootstrap';



export const About = () => {
  return (
  <div id="about">
    <br></br>
    <section calssName="mb-5">
        <div className='text-center'>
        <h3 className='text-center text-primary my-3 py-5 fw-bold fs-3'>About</h3>
        </div>
        <Container className='aboutimg'>
           <Row>
              <Col md={6}  className = 'py-3 py-md-0 mx-sm-auto w:100% h:100%'>
                <img src={require('../Assets/About,png.jpg')} alt="about-img" fluid={true}  ></img>
              </Col>

             <Col md={6} className='py-3 py-md-0'>
                <h2>How Travel Agency Work</h2>
                   <p><span className='fw-bold fs-5'>X</span>plore offer a wide range of services, including travel portal development, API integration, booking engine development, mobile app development, website design, content management systems (CMS), payment gateway integration, search engine optimization (SEO), digital marketing, analytics and reporting, and ongoing support and maintenance for travel technology solutions..</p>
                   <p>At our travel website development services, we specialize in creating customized and visually stunning websites that cater specifically to the travel industry. With our expertise, we can help travel companies, tour operators, hotels, and other travel businesses establish a strong online presence and attract more customers. Here's how our travel website   development services can benefit your business.</p>
               <Button class="btn btn-primary" >Know more</Button> 
          </Col>
     </Row>
        </Container>
    </section>
  </div>
  )
}
export default About