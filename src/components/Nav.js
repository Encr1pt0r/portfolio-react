import React from 'react'
import "./Nav.scss";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='nav'>
        <h1 className='nav__title'>Kevin Mbuluko</h1>

        <input type='checkbox' className='nav__checkbox' id='nav__checkbox'/>
          <label for="nav__checkbox" className='nav__toggle'>
            <AiOutlineMenu className='nav__toggle__menu' />
            <AiOutlineClose className='nav__toggle__close' />
          </label>
        
        <ul className='nav__links'>
            <li className='nav__links__link'>
              <Link to='/'>Home</Link>
            </li>
            <li className='nav__links__link'>
              <Link to='/projects'>Projects</Link>
            </li>
        </ul>
    </nav>
  )
}
