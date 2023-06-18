import { createSlice } from '@reduxjs/toolkit';
import { postForm } from './actions';
import { IMainState } from '../../types';

const initialState: IMainState = {
  error: null,
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
        newPage.isReady = newPage.isReady || i == payload;
        return newPage;
      });
      state.pages = [...pages];
    },
  },
  extraReducers: (builder) => {
    builder
      // createPost
      .addCase(postForm.pending, (state) => {
        state.error = null;
      })
      .addCase(postForm.fulfilled, (state) => {
        state.error = null;
      })
      .addCase(postForm.rejected, (state, { payload }) => {
        state.error = String(payload);
      });
  },
});

export const { setPageActive, setPageReady } = mainSlice.actions;

export default mainSlice.reducer;
