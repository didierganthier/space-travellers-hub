import React, { useEffect } from 'react';

const Missions = () => {
  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/missions')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1>My Missions</h1>
    </div>
  );
};

export default Missions;
