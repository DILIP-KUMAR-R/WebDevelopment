import React from 'react'
import {Col, Container, Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { InputGroup,FloatingLabel } from 'react-bootstrap';


export const Contact = () => {
  return (
    <section id="contact" className='bg-dark py-3 pb-5'>
        <div className='text-center my-2 py-3'>
            <h2 className='text-primary fs-5 fw-bold'>Contact Us</h2>
        </div>
        <Container>
            <Row className='justify-content-center '>
                <Col md={6}>
                  <Form className= "xs-mx-5">
                    <InputGroup className="mb-3">
                       <InputGroup.Text id="basic-addon1"><i class="bi bi-envelope"></i></InputGroup.Text>
                      <FloatingLabel controlId="floatingInput" label="Email address">
                        <Form.Control type="email" placeholder="name@example.com"/>
                      </FloatingLabel>
                     </InputGroup>

                     <InputGroup className="mb-3">
                       <InputGroup.Text id="basic-addon1"><i class="bi bi-person-fill"></i></InputGroup.Text>
                      <FloatingLabel controlId="floatingInput" label="Name">
                        <Form.Control type="Name" placeholder="Enter a name"/>
                      </FloatingLabel>
                     </InputGroup>

                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                        <Form.Control as="textarea"
                            placeholder="Leave a comment here"
                          style={{ height: '100px' }}
                         />
                    </FloatingLabel>
                  </Form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact;