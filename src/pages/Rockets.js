import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets, joinRocket } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRockets());
    }
  }, [dispatch, rockets.length]);

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
              <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
            </th>
            <th>
              {rocket.description}
            </th>
            <th>
              <button
                type="button"
                onClick={() => handleClick(rocket.rocket_id)}
              >
                {rocket.joined ? 'Cancel Reservation' : 'Reserve Rocket'}
              </button>
            </th>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default Rockets;
