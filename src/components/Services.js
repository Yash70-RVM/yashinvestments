import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    { title: "Wealth Management", description: "Optimize your investments and secure your future." },
    { title: "Real Estate Investment", description: "Explore lucrative property opportunities." },
    { title: "Financial Consulting", description: "Get tailored advice for your financial needs." },
  ];

  return (
    <section className="services" id="services">
      <h2>Our Expert Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="learn-more">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
