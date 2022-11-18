import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import elonImg from '../assets/elon.png';

const NotFound = (props) => {
  const { title, link, emoji } = props;

  return (
    <div className="w-2/3 flex flex-col justify-start">
      <p className="text-xl font-bold w-1/2">
        No
        {' '}
        {title}
        {' '}
        reserved yet
      </p>
      <img src={elonImg} alt="elon" className="my-8" width={300} height={300} />
      <Link to={link} className="text-[#2C7BFF] border border-[#2C7BFF] hover:bg-[#2C7BFF] hover:text-white text-lg p-2 w-56 rounded flex justify-center items-center">
        Reserve
        {' '}
        {title}
        {' '}
        {emoji}
      </Link>
    </div>
  );
};

NotFound.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
};

export default NotFound;
