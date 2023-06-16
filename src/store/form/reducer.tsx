import { createSlice } from '@reduxjs/toolkit';
import { postForm } from './actions';
import { IFormState } from '../../types';

const initialState: IFormState = {
  tel: '',
  email: '',
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm: (state, { payload }) => {
      return { ...state, ...payload };
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

export const { updateForm } = formSlice.actions;

export default formSlice.reducer;
