import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function Contact() {
  return (
    <section id='contact' className='block contact-block'>
      <Container fluid>
        <div className='title-holder'>
          <h2>Contact Us</h2>
          <div className='subtitle'>get connected with us</div>
        </div>
        <Form className='contact-form'>
          <Row>
            <Col sm={4}>
              <Form.Control type='text' placeholder="Enter your full name" required />
            </Col>
            <Col sm={4}>
              <Form.Control type='email' placeholder="Enter your email address" required />
            </Col>
            <Col sm={4}>
              <Form.Control type='tel' placeholder="Enter your contact number" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" placeholder="Enter your message" required />
            </Col>
          </Row>
          <div className='btn-holder'>
            <Button type='submit'>Submit</Button>
          </div>
        </Form>
      </Container>
      <div className='google-map'>
        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.6064073197!2d-0.43123970044350396!3d51.52860701956136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1701243388457!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Container fluid>
        <div className='contact-info'>
          <ul>
            <li>
              <i className="fa-solid fa-envelope"></i> <br />
              hello@domain.com
            </li>
            <li>
              <i className="fa-solid fa-phone"></i> <br />
              987-456-1230
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i> <br />
              London, United Kindom
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}
