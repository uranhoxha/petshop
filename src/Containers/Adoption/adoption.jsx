import React from 'react';
import './adoption.css';
import cat1 from './images/cat1.png';
import cat2 from './images/cat2.png';
import cat3 from './images/cat3.png';
import cat4 from './images/cat4.png';
import dog1 from './images/dog1.png';
import dog2 from './images/dog2.png';
import dog3 from './images/dog3.png';
import bird1 from './images/bird1.png';
import bird2 from './images/bird2.png';
import bird3 from './images/bird3.png';

function Adoption() {
  // Data for all animals
  const animals = [
    {
      type: 'cat',
      name: 'Elsa',
      imgSrc: cat1,
      description: 'Cats are known for their independent and affectionate nature. From playful kittens to wise and elegant adults, our feline friends offer companionship, entertainment, and endless purrs.',
      button: "adopt a cat"
    },
    {
      type: 'cat',
      name: 'Simba',
      imgSrc: cat2,
    },

    {
      type: 'cat',
      name: 'Leo',
      imgSrc: cat3,
    },
    {
      type: 'cat',
      name: 'Goose',
      imgSrc: cat4,
    },
    // Add more cat objects as needed
    {
      type: 'dog',
      name: 'Rocky',
      imgSrc: dog1,
      description: 'Dogs have rightfully earned the title of "man\'s best friend" for their unwavering loyalty, unconditional love, and boundless enthusiasm. Whether you\'re an active individual seeking a jogging partner or a family looking for a gentle and protective companion, our canine pals come in various breeds, sizes, and personalities.',
      button: "adopt a cat"
    },
    {
      type: 'dog',
      name: 'Rosie',
      imgSrc: dog2,
    },

    {
      type: 'dog',
      name: 'Oliver',
      imgSrc: dog3,
    },
    // Add more dog objects as needed
    {
      type: 'bird',
      name: 'Tango',
      imgSrc: bird1,
      description: 'If you\'re seeking a feathered friend with intelligence, personality, and the ability to engage in meaningful interactions, birds are the perfect choice. With their captivating beauty, vibrant colors, and ability to mimic human speech, these intelligent birds can bring joy and laughter to your home.',
      button: "adopt a cat"
    },
    {
      type: 'bird',
      name: 'Biscuit',
      imgSrc: bird2,
    },

    {
      type: 'bird',
      name: 'Rio',
      imgSrc: bird3,
    },
    // Add more bird objects as needed
  ];

  const getAnimalTypeName = (animalType) => {
    return animalType === 'cat' ? 'Cat' : animalType === 'dog' ? 'Dog' : 'Bird';
  };

  // Filter animals by type and render the cards
  const renderAnimalCards = (animalType) => {
    const animalTypeName = getAnimalTypeName(animalType);
    return (
      <React.Fragment>
        <h1 id='adoption'>Adopt a {animalTypeName}:</h1>
        <p className='adoption-paragraph'>
          {animals.find(animal => animal.type === animalType)?.description}
        </p>
        <div className='adoption-card_container'>
          {animals
            .filter(animal => animal.type === animalType)
            .map((animal, index) => (
              <div key={index} className='adoption-card'>
                <img src={animal.imgSrc} alt={animal.name} />
                <p>{animal.name}</p>
              </div>
            ))}
        </div>
        <div className='adoption-button'>
          <button>{`Adopt a ${animalTypeName}`}</button>
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className='adoption-container section-padding'>
      {renderAnimalCards('cat')}
      {renderAnimalCards('dog')}
      {renderAnimalCards('bird')}
    </div>
  );
}

export default Adoption;