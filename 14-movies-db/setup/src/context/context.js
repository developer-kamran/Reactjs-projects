import React, { useState, useContext, useEffect } from 'react';
// import useFetch from './useFetch';
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('batman');
  // const { isLoading, error, data: movies } = useFetch(`&s=${query}`);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: '' });
  const [data, setData] = useState([]);
  const searchQuery = `&s=${query}`;
  const fetchMovies = async (url) => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const result = await response.json();

      if (result.Response === 'True') {
        setData(result.Search || result);
      } else {
        setError({ show: true, msg: result.error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${searchQuery}`);
  }, [searchQuery]);

  return (
    <AppContext.Provider value={{ isLoading, error, data, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
