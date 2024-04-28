import { createSlice } from '@reduxjs/toolkit';

const initialState= {
    showUserPostGrafig: false,
  }

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setShowUserPostGrafig: (state,action) => {
      state.showUserPostGrafig= action.payload;
    },
  },
});

export const {setShowUserPostGrafig} = modalSlice.actions;

export default modalSlice.reducer;