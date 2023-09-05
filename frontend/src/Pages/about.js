import React, { useEffect } from 'react';
import nobg from '../resources/nobg_emblem.png';
import Navbar from '../Components/Navbar';
import Footer from '../Components/footer';


function About() {
  // Function to animate text on page load
  const animateText = () => {
    const text = document.querySelector('.fade-in-text');
    text.style.opacity = 0;
    let opacity = 0;
    const timer = setInterval(() => {
      if (opacity >= 1) {
        clearInterval(timer);
      }
      text.style.opacity = opacity;
      opacity += 0.02; // Adjust the speed of the fade-in effect
    }, 20); // Adjust the interval for smoother animation
  };

  useEffect(() => {
    animateText(); // Call the text animation function on page load
  }, []);

  return (
    <>
      <Navbar />
      <div className="parallax">
        <div className="container mt-5 text-center">
          <h1 className="text-white display-4 fade-in-text fw-bold">About Us</h1>
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2">
              <img
                src={nobg}
                alt="Library Interior"
                className="img-fluid rounded custom-shadow"
              />
            </div>
            <div className="col-md-6 order-md-1">
              <p className="lead fs-25 text-white ">
                Welcome to our Pragati Library Management platform. We are
                dedicated to providing a rich and diverse collection of books for
                our readers, carrying forward the knowledge of generations. Our
                mission is to foster a love for reading, learning, and exploration.
              </p>
              <p className="text-white ">
                Our vision is to create an accessible and vibrant library that
                enriches the lives of our community members. We believe in the
                power of books to inspire, educate, and transform individuals.
              </p>
            </div>
          </div>
          {/* More content */}
          <div className="row mt-5">
            <div className="col-md-6">
              <h2 className="text-primary text-white">Our Vision</h2>
              <p className="text-white ">
                Empowering Minds Through Books: Our Vision for a Thriving Community Library!
              </p>
            </div>
            <div className="col-md-6">
              <h2 className="text-primary text-white">Our Mission</h2>
              <p className="text-white ">
                Our mission is to curate a diverse collection of books that cater to all ages and interests. We aim to provide a welcoming environment where readers can explore new worlds, gain knowledge, and connect with fellow book enthusiasts.
              </p>
            </div>
          </div>
         
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
