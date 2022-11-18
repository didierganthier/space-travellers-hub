/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchMission from '../../services/fetchMissions';

const getMissions = createAsyncThunk('missions/GetMissions', async () => {
  const missiondata = await fetchMission().then((data) => data);
  const missions = [];
  missiondata.forEach((mission) => {
    missions.push({
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
    });
  });
  return missions;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    loading: false,
    missions: [],
    error: '',
  },
  reducers: {
    joinMission: (state, action) => {
      const mission = state.missions.find((m) => m.mission_id === action.payload);
      mission.joined = !mission.joined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMissions.fulfilled, (state, action) => {
      state.loading = false;
      state.missions = action.payload;
    });
    builder.addCase(getMissions.rejected, (state, action) => {
      state.loading = false;
      state.missions = [];
      state.error = action.error.message;
    });
  },
});

export default missionsSlice.reducer;
export { getMissions };
export const { joinMission } = missionsSlice.actions;
