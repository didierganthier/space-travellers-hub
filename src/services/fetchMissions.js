const fetchMission = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  return data;
};

export default fetchMission;
