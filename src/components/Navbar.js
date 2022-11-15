import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/Missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: 'MyProfile',
      text: 'My Profile',
    },
  ];

  return (
    <nav className="Nav-bar">
      <div className="icon-continer">
        <img src="https://cdn-icons-png.flaticon.com/512/3212/3212567.png" className="logo-image" alt="logo-img" />
        <h1 className="nav-text">Space Traveler&apos;s Hub</h1>
      </div>

      <div className="options-continer">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink className="Nav-bar-element" to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
