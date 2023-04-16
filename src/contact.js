import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';


import Col from 'react-bootstrap/Col';

import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
function Contact() {
  
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
  
    <div className="d-flex flex-column justify-content-center align-items-center  vh-100">
 <h1 className="text-center pt-5">Contact Me!</h1>
    <Form style={{width: "500px"}} noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Your Name"            
          />
        <Form.Control.Feedback type="invalid">
              This field is mandatory.
            </Form.Control.Feedback>
        </Form.Group>
        </Row>
        
        <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom02">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="example@email.com"
            
          />
            <Form.Control.Feedback type="invalid">
              Please use a valid email.
            </Form.Control.Feedback>
          
        </Form.Group>
       
        </Row>

        <Row className="mb-3">
        <Form.Group className="mb-24" controlId="Message.ControlTextarea1">
        <Form.Label >Message</Form.Label>        
        <Form.Control column sm={10} 
            required
            type="text"
            placeholder="Enter message here."
            as="textarea" 
            rows={6} />
             <Form.Control.Feedback type="invalid">
              This field is mandatory.
            </Form.Control.Feedback>
      </Form.Group>
     
        </Row>
      <Button pt="4" type="submit">Submit form</Button>
    </Form>
    </div>
    </>
  );
}


    

export default Contact;