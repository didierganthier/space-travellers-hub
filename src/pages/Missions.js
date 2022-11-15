import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions, joinMission } from '../redux/missions/missionSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.reducer.missions);

  if (missions.length === 0) {
    setTimeout(() => {
      dispatch(getMissions());
    }, '1000');
  }

  const handleClick = (missionId) => {
    dispatch(joinMission(missionId));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th className="text-white">Empty</th>
        </tr>
      </thead>
      {missions.map((mission) => (
        <tbody
          key={mission.mission_id}
        >
          <tr>
            <th>
              {mission.mission_name}
            </th>
            <th>
              {mission.description}
            </th>
            <th>
              {mission.joined ? 'Active Member' : 'NOT A MEMBER'}
            </th>
            <th>
              <button
                type="button"
                onClick={() => handleClick(mission.mission_id)}
              >
                {mission.joined ? 'Leave Mission' : 'Join Mission'}
              </button>
            </th>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default Missions;
