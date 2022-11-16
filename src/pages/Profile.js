import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missionSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.reducer.missions);

  if (missions.length === 0) {
    setTimeout(() => {
      dispatch(getMissions());
    }, '1000');
  }

  return (
    <div>
      <h1>My Missions</h1>
      {missions.filter((mission) => mission.joined).map((mission) => (
        <div key={mission.mission_id}>
          <h2>{mission.mission_name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Profile;
