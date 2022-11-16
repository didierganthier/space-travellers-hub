/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchRockets from '../../services/fetchRockets';

const getRockets = createAsyncThunk('rocket/GetRockets', async () => {
  const rocketsdata = await fetchRockets().then((data) => data);
  const rockets = [];
  rocketsdata.forEach((rocket) => {
    rockets.push({
      rocket_id: rocket.rocket_id,
      rocket_name: rocket.rocket_name,
      description: rocket.description,
      flickr_images: rocket.flickr_images,
    });
  });
  return rockets;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    loading: false,
    rockets: [],
    error: '',
  },
  reducers: {
    joinRocket: (state, action) => {
      const rocket = state.rockets.find((m) => m.rocket_id === action.payload);
      rocket.joined = !rocket.joined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRockets.fulfilled, (state, action) => {
      state.loading = false;
      state.rockets = action.payload;
    });
    builder.addCase(getRockets.rejected, (state, action) => {
      state.loading = false;
      state.rockets = [];
      state.error = action.error.message;
    });
  },
});

export default rocketsSlice.reducer;
export { getRockets };
export const { joinRocket } = rocketsSlice.actions;
