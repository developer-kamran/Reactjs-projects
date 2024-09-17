import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import data from './data';
import Article from './Article';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex(index + 1);
  //   }, 6000);

  //   return () => clearInterval(slider);
  // }, [index]);

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>*</span>Reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          return (
            <Article
              key={person.id}
              {...person}
              personIndex={personIndex}
              index={index}
              people={people}
            />
          );
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
