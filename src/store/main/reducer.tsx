import { createSlice } from '@reduxjs/toolkit';
import { postForm } from '../form/actions';
import { IMainState } from '../../types';

const initialState: IMainState = {
  error: false,
  isLoading: false,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    updateData: (state, payload) => {
      // TODO
      // state = { payload };
    },
  },
  extraReducers: (builder) => {
    builder
      // createPost
      .addCase(postForm.pending, (state) => {
        // state.isLoading = true;
        // state.error = null;
      })
      .addCase(postForm.fulfilled, (state) => {
        // state.isLoading = false;
        // state.error = null;
      });
  },
});

export const { updateData } = mainSlice.actions;

export default mainSlice.reducer;
