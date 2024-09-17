import React from 'react';
import Form from './components/SearchForm';
import Movies from './components/movies/Movies';
const Home = () => {
  return (
    <main>
      <Form />
      <Movies />
    </main>
  );
};

export default Home;
