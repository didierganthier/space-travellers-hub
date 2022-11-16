import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions, joinMission } from '../redux/missions/missionSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  if (missions.length === 0) {
    setTimeout(() => {
      dispatch(getMissions());
    }, '1000');
  }

  const handleClick = (missionId) => {
    dispatch(joinMission(missionId));
  };

  return (
    <div className="overflow-x-auto relative shadow-md rounded-lg">
      <table className="text-sm text-left text-gray-500 m-8 border">
        <thead className="text-xs text-gray-700 uppercase bg-white">
          <tr>
            <th scope="col" className="py-3 px-6 border">
              Mission
            </th>
            <th scope="col" className="py-3 px-6 border">
              Description
            </th>
            <th scope="col" className="py-3 px-6 border">
              Status
            </th>
            <th scope="col" className="py-3 border">
              {' '}
            </th>
          </tr>
        </thead>
        <tbody className="mx-5">
          {missions.map((mission, index) => (
            <tr className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#F2F2F2]'} border-b`} key={mission.mission_id}>
              <th scope="row" className="py-4 px-6 font-medium border text-gray-900 whitespace-nowrap">
                {mission.mission_name}
              </th>
              <td className="py-4 px-6 border w-2/3">
                {mission.description}
              </td>
              <td className="py-4 px-6 border">
                {mission.joined ? (
                  <span className="bg-[#31A1B8] text-white text-xs p-2 rounded">Active Member</span>
                ) : (
                  <span className="bg-[#6D757D] text-white text-xs p-2 rounded">NOT A MEMBER</span>
                )}
              </td>
              <td className="py-4 px-6 border">
                {mission.joined ? (
                  <button type="button" className="text-[#DD3B4A] border border-[#DD3B4A] text-xs p-2 rounded" onClick={() => handleClick(mission.mission_id)}>Leave Mission</button>
                ) : (
                  <button type="button" className="text-[#6D757D] border border-[#6D757D] text-xs p-2 rounded" onClick={() => handleClick(mission.mission_id)}>Join Mission</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
};

export default Missions;
