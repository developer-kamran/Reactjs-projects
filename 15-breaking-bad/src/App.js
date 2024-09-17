import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/UI/Header';
import Search from './components/UI/Search';
import CharacterGrid from './components/characters/CharacterGrid';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [query, setQuery] = useState('');

  const getData = async () => {
    // setisLoading(true);
    const result = await axios(
      `https://www.breakingbadapi.com/api/characters?name=${query}`
    );
    setItems(result.data);
    setisLoading(false);
  };

  useEffect(() => {
    getData();
  }, [query]);

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
