import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';


const Header = () => {
  const [modalShow, setModalShow] = React.useState(false);
  function MyVerticallyCenteredModal(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" className='text-center'>
              Login
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                        </Form.Text>
                 </Form.Group>

                 <Form.Group className="mb-3" controlId="formBasicPassword">
                       <Form.Label>Password</Form.Label>
                       <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                     <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">Login </Button>
      </Form>
        </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }


  return (
   < >
    <Navbar  className= 'sticky-nav' bg="dark"  variant={"dark"} expand="lg" >
      <Container>
        <Navbar.Brand href="#home"><img src={require('../Assets/logo.png')} width="100"
              height="30"  className='d-flex justify-content-start'alt="React Bootstrap logo"/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className = "nav-link fs-6 fw-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#packages">Packages</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Button className='btn btn-primary rounded ms-3 btn-sm btn-w-50' onClick={() => setModalShow(true)}><i class=" pe-2 bi bi-box-arrow-in-right "></i>Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


     <MyVerticallyCenteredModal
     show={modalShow}
     onHide={() => setModalShow(false)}
     />
  </>
  );
}





export default Header