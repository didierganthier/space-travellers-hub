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
      path: '/MyProfile',
      text: 'My Profile',
    },
  ];

  const activeClassName = 'underline';

  return (
    <nav className="h-16 shadow flex justify-between px-[20px]">
      <div className="icon-continer flex items-center h-16 my-[4px]">
        <img src="https://cdn-icons-png.flaticon.com/512/3212/3212567.png" className="w-10 h-10" alt="logo-img" />
        <h1 className="nav-text">Space Traveler&apos;s Hub</h1>
      </div>

      <div className="options-continer flex items-center list-none gap-4">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              {link.text}
            </NavLink>
            {link.text === 'Missions' && <span className="pl-4">|</span>}
          </li>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
