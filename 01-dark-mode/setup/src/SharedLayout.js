import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const isActive = ({ isActive }) => {
  return { color: isActive ? 'red' : 'green' };
};
const SharedLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default SharedLayout;
