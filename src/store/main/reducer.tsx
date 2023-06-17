import { createSlice } from '@reduxjs/toolkit';
import { postForm } from '../form/actions';
import { IMainState } from '../../types';

const initialState: IMainState = {
  error: false,
  isLoading: false,
  curPage: 0,
  pages: [
    { path: '/form/0', isReady: false },
    { path: '/form/1', isReady: false },
    { path: '/form/2', isReady: false },
  ],
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setPageActive: (state, { payload }) => {
      state.curPage = payload;
    },
    setPageReady: (state, { payload }) => {
      const pages = state.pages.map((p, i) => {
        const newPage = p;
        newPage.isReady = i == payload;
        return newPage;
      });
      state.pages = [...pages];
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

export const { setPageActive, setPageReady } = mainSlice.actions;

export default mainSlice.reducer;
