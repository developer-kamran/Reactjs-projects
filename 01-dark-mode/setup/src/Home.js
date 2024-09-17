import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import data from './data';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

const Home = () => {
  const [theme, setTheme] = useState(getStorageTheme());
  const toggleTheme = () => {
    if (theme === 'dark-theme') {
      setTheme('light-theme');
    } else {
      setTheme('dark-theme');
    }
  };

  useEffect(() => {
    document.body.className = theme;

    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <>
      <main>
        <nav>
          <div className='nav-center'>
            <h1>Kamran Iqbal</h1>
            <button className='btn' onClick={toggleTheme}>
              Toggle
            </button>
          </div>
        </nav>
        <section className='articles'>
          {data.map((item) => {
            const { title, snippet, length, date, id } = item;
            return (
              <article className='post'>
                <Link to={`${id}`} className='heading'>
                  {title}
                </Link>
                <div className='post-info'>
                  <span>{moment(date).format('dddd Do ,YYYY')}</span>
                  <span>{length} min read</span>
                </div>
                <p>{snippet}</p>
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default Home;
