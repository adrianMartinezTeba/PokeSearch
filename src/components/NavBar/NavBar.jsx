import React from 'react';
import './NavBar.scss'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className='container-fluid'>
     <nav className='navbar bg-danger'>
     <ul className='navbar-nav flex flex-row '>
     <li className='nav-item bg-light p-r-2'>
      <Link to={'/'}>PokemonSearch</Link>
     </li>
     <li className='nav-item bg-light'>
      <Link to={'/'}>Lupa</Link>
     </li>
     <li className='nav-item bg-light'>
      <Link to={'/contact'}>Contact</Link>
     </li>
     </ul>
     </nav>
    </div>
  );
};

export default NavBar;
