import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missionSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, [dispatch, missions.length]);

  const filteredMission = missions.filter((mission) => mission.joined === true);

  return (
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
  );
};

export default Profile;
