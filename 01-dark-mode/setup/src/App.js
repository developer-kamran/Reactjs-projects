import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Error from './Error';
import SingleArticle from './SingleArticle';
// import About from './About';
import SharedLayout from './SharedLayout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/:productId' element={<SingleArticle />} />
          <Route path='/*' element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

/* <Route path='/about' element={<SharedLayout />}>
        <Route index element={<About />}></Route>
        <Route
          path='developer'
          element={<div className='container'>Kamran Iqbal</div>}
        />
      </Route> */
// <NavLink
//   to='/'
//   className={({ isActive }) => {
//     return isActive ? 'link-active link' : 'link';
//   }}
// >
//   Home
// </NavLink>
// <NavLink
//   to='/about'
//   className={({ isActive }) => {
//     return isActive ? 'link-active link' : 'link';
//   }}
// >
//   About
// </NavLink>
