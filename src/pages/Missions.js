import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions/missionSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.reducer.missions);

  if (missions.length === 0) {
    setTimeout(() => {
      dispatch(getMissions());
    }, '1000');
  }
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
              Active Member
            </th>
            <th>
              <button type="button">Join Mission</button>
            </th>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default Missions;
