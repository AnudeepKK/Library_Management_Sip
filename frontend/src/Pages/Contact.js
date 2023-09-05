import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import contact from '../Images/contact.jpg';
import CustomNavbar from "../Components/Navbar";
import Footer from "../Components/footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission, e.g., sending an email or saving to a database
    console.log(formData);
  };

  return (
    <>
    <CustomNavbar/>
    <div
      style={{
        backgroundImage: `url(${contact})`, // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Ensure the background covers the entire viewport height
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h2>Contact Us</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    maxHeight: "200px", // Set maximum height
                    resize: "vertical", // Allow vertical resizing
                  }}
                  required
                />
               
              </Form.Group>

              <Button className="m-2 primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
