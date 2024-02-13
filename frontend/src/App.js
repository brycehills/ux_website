// App.js

import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <div className="company-info">
          <span className="bullet-point">&#8226;</span>
          Innotech Consulting LLC
        </div>
        <nav>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <img src="heroimage.png" alt="Hero Image" />
          <div className="text-content">
            <h2>Your Title</h2>
            <p>Your description text here.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        {/* Service 1 */}
        <div className="service">
          <div className="text-content">
            <h3>Service 1 Header</h3>
            <p>Service 1 Subheader</p>
            <ul>
              <li>Point 1</li>
              <li>Point 2</li>
              <li>Point 3</li>
            </ul>
          </div>
          <div className="image-content">
            <img src="uxcompany1.JPG" alt="Service 1 Image" />
          </div>
        </div>

        {/* Service 2 */}
        <div className="service">
          <div className="text-content">
            <h3>Service 2 Header</h3>
            <p>Service 2 Subheader</p>
            <ul>
              <li>Point 1</li>
              <li>Point 2</li>
              <li>Point 3</li>
            </ul>
          </div>
          <div className="image-content">
            <img src="uxcompany1.JPG" alt="Service 2 Image" />
          </div>
        </div>

        {/* Service 3 */}
        <div className="service">
          <div className="text-content">
            <h3>Service 3 Header</h3>
            <p>Service 3 Subheader</p>
            <ul>
              <li>Point 1</li>
              <li>Point 2</li>
              <li>Point 3</li>
            </ul>
          </div>
          <div className="image-content">
            <img src="uxcompany1.JPG" alt="Service 3 Image" />
          </div>
        </div>

        {/* Thin Black Line */}
        <hr className="thin-line" />

        {/* User Input Form Section */}
        <div className="user-input-section">
          <h3>User Input Form Header</h3>
          <div className="left-content">
            <ul>
              <li>Company Name</li>
              <li>Phone Number</li>
              <li>Company Email</li>
            </ul>
          </div>
          <div className="right-content">
            {/* User input form with 6 input boxes */}
            {/* Add your form elements here */}
          </div>
        </div>

        {/* Submit Button */}
        <button className="submit-button">Submit</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default App;
