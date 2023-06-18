import { createSlice } from '@reduxjs/toolkit';
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
  about: '',
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
    clearForm: (state) => {
      return { ...initialState };
    },
  },
});

export const { updateForm, addField, deleteField, clearForm } = formSlice.actions;

export default formSlice.reducer;
