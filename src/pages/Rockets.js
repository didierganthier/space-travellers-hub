import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets, joinRocket } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  if (rockets.length === 0) {
    setTimeout(() => {
      dispatch(getRockets());
    }, '1000');
  }

  const handleClick = (rocketId) => {
    dispatch(joinRocket(rocketId));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Rocket</th>
          <th>Description</th>
          <th>Status</th>
          <th className="text-white">Empty</th>
        </tr>
      </thead>
      {rockets.map((rocket) => (
        <tbody
          key={rocket.rocket_id}
        >
          <tr>
            <th>
              {rocket.rocket_name}
            </th>
            <th>
              {rocket.description}
            </th>
            <th>
              {rocket.joined ? 'Active Member' : 'NOT A MEMBER'}
            </th>
            <th>
              <button
                type="button"
                onClick={() => handleClick(rocket.rocket_id)}
              >
                {rocket.joined ? 'Leave Rocket' : 'Join Rocket'}
              </button>
            </th>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default Rockets;
