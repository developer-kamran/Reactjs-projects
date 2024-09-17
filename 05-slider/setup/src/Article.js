import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const Article = ({
  people,
  index,
  personIndex,
  id,
  image,
  name,
  title,
  quote,
}) => {
  let position = 'nextSlide';
  if (personIndex === index) {
    position = 'activeSlide';
  }
  if (
    personIndex === index - 1 ||
    (index === 0 && personIndex === people.length - 1)
  ) {
    position = 'lastSlide';
  }
  return (
    <article className={position} key={id}>
      <img src={image} alt='' className='person-img' />
      <h4>{name}</h4>
      <p className='title'>{title}</p>
      <p className='text'>{quote}</p>
      <FaQuoteRight className='icon'></FaQuoteRight>
    </article>
  );
};

export default Article;
