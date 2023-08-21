import React from 'react';
import nobg from '../resources/nobg_emblem.png';
function About() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 display-4">About Us</h1>
      <div className="row align-items-center">
        <div className="col-md-6 order-md-2">
          <img
            src={nobg}
            alt="Library Interior"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6 order-md-1">
          <p className="lead">
            Welcome to our Pragati Library Management platform. We are dedicated to providing a rich and diverse collection of books for our readers with the knowledge og generations. Our mission is to foster a love for reading, learning, and exploration.
          </p>
          <p>
            Our vision is to create an accessible and vibrant library that enriches the lives of our community members. We believe in the power of books to inspire, educate, and transform individuals.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <h2 className="text-primary">Our Vision</h2>
          <p>
          Empowering Minds Through Books: Our Vision for a Thriving Community Library!
          </p>
        </div>
        <div className="col-md-6">
          <h2 className="text-primary">Our Mission</h2>
          <p>
            Our mission is to curate a diverse collection of books that cater to all ages and interests. We aim to provide a welcoming environment where readers can explore new worlds, gain knowledge, and connect with fellow book enthusiasts.
          </p>
        </div>
      </div>
      <div className="text-center mt-5">
        <h2 className="text-primary">Contact Us</h2>
        <p>If you have any questions or inquiries, feel free to reach out to us at <a href="mailto:info@example.com">info@example.com</a>.</p>
      </div>
    </div>
  );
}

export default About;
