import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missionSlice';
import { getRockets } from '../redux/rockets/rocketsSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, [dispatch, missions.length]);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRockets());
    }
  }, [dispatch, rockets.length]);

  const filteredMission = missions.filter((mission) => mission.joined === true);
  const filteredRocket = rockets.filter((rockets) => rockets.joined === true);

  return (
    <>
      <div className="mx-5">
        <h1 className="font-bold my-5">My Missions</h1>
        {filteredMission.length > 0 ? (
          <div className="border w-1/2 rounded">
            {missions.filter((mission) => mission.joined).map((mission) => (
              <div key={mission.mission_id} className="border p-8">
                <h2>{mission.mission_name}</h2>
              </div>
            ))}
          </div>
        ) : (
          <p>No missions joined yet</p>
        )}
      </div>

      <div className="mx-5">
        <h1 className="font-bold my-5">My Rockets</h1>
        {filteredRocket.length > 0 ? (
          <div className="border w-1/2 rounded">
            {rockets.filter((rocket) => rocket.joined).map((rocket) => (
              <div key={rocket.rocket_id} className="border p-8">
                <h2>{rocket.rocket_name}</h2>
              </div>
            ))}
          </div>
        ) : (
          <p>No rockets joined yet</p>
        )}
      </div>
    </>
  );
};

export default Profile;
