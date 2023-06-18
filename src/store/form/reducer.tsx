import { createSlice } from '@reduxjs/toolkit';
import { postForm } from './actions';
import { IFormState } from '../../types';

const initialState: IFormState = {
  tel: '',
  email: '',
  nickname: '',
  surname: '',
  name: '',
  sex: '',
  advantages: [''],
  radioGroup: [],
  checkGroup: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm: (state, { payload }) => {
      return { ...state, ...payload };
    },
    addField: (state) => {
      state.advantages = [...state.advantages, ''];
    },
    deleteField: (state, { payload }) => {
      const i = payload;
      const newArr = state.advantages;
      newArr.splice(i, 1);
      state.advantages = [...newArr];
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

export const { updateForm, addField, deleteField } = formSlice.actions;

export default formSlice.reducer;
