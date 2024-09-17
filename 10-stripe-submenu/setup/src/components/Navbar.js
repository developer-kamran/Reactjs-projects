import React from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../images/stripe.svg';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displayMenu = (e) => {
    const pageContent = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(pageContent, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displayMenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displayMenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displayMenu}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
