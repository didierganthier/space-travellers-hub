/* eslint-disable import/extensions */
import { configureStore } from '@reduxjs/toolkit';
import reducer from './missions/missionSlice.js';
import rocketreducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    missions: reducer,
    rockets: rocketreducer,
  },
});

export default store;
