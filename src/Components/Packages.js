import React, { useState }from  'react'
import {Col, Container, Row } from 'react-bootstrap'
import { PackageCard } from './PackageCard'

const Packages = () => {
    const[packages] = useState([1,2,3,4,5,6]);
  return (
  <div id = "packages">
    <br></br>
    <section className='bg-light'>
        
            <div>
                <h3 className='text-center text-primary my-3 mt-5 py-5 fw-bold fs-3'>
                    Packages
                </h3>
            </div>
      <Container>
        <Row>
            {packages.map((item)=>{
                return (
                      <Col md={6} lg={4} key={item}>
                        <PackageCard/>
                    </Col>
                );
            })}
            
        </Row>
      </Container> 
    </section>
    </div>

  )
};

export default Packages