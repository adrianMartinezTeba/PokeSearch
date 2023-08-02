import React from 'react';
import './NavBar.scss'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className='container'>
     <nav className='navbar bg-danger row'>
     <ul className='navbar-nav flex flex-row '>
     <li className='nav-item bg-light col-2'>
      <Link to={'/'}>PokemonSearch</Link>
     </li>
     <li className='nav-item bg-light col-2'>
      <Link to={'/searcher'}>Lupa</Link>
     </li>
     <li className='nav-item bg-light col-2'>
      <Link to={'/contact'}>Contact</Link>
     </li>
     </ul>
     </nav>
    </div>
  );
};

export default NavBar;
