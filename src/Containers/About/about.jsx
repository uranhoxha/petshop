import React from 'react';
import './about.css';
import { FaDog, FaCat, FaDove } from 'react-icons/fa';

function About() {
  const icons = [
    {
      icon: FaDog,
      text: "Dogs"
    },
    {
      icon: FaCat,
      text: "Cats"
    },
    {
      icon: FaDove,
      text: "Birds"
    }
  ];

  return (
    <div className='section-padding about-section' id='about'>
      <h1>Discover Your Perfect Companion: Cats, Parrots, and Dogs Await!</h1>
      <h2>Welcome to our pet adoption platform, where you can find a loving feline friend, a talkative parrot companion, or a loyal canine companion.</h2>
      <div className='icon-container'>
        {icons.map((icon, index) => (
          <a key={index}>
            <icon.icon />
            <p>{icon.text}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default About;
