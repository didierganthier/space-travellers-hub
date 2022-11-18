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
    <div>
      {rockets.map((rocket) => (
        <div key={rocket.rocket_id} className="p-8 flex gap-4">
          <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} className="rounded-xl" width={500} height={500} />
          <div className="flex flex-col justify-start">
            <h1 className="font-bold text-xl">{rocket.rocket_name}</h1>
            <p className="mt-2 mb-10 text-2xl">
              {rocket.joined && (
              <span className="bg-[#31A1B8] text-white text-xs p-1 rounded pr-2">
                Reserved
              </span>
              )}
              {'  '}
              {rocket.description}
            </p>
            {rocket.joined ? (
              <button type="button" className="text-[#6D757D] border border-[#6D757D] text-xs p-2 w-36 rounded" onClick={() => handleClick(rocket.rocket_id)}>Cancel Reservation</button>
            ) : (
              <button type="button" className="text-white bg-[#2C7BFF] text-xs p-2 w-36 rounded" onClick={() => handleClick(rocket.rocket_id)}>Reserve Rocket</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
