// actions.tsx is for async actions
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IFormState } from '../../types';

// postForm
export const postForm = createAsyncThunk(
  'main/postForm',
  async function (data: IFormState, { rejectWithValue }) {
    try {
      const response = await fetch('https://api.sbercloud.ru/content/v1/bootcamp/frontend', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (response.status <= 299 && response.status >= 200) {
        return response.statusText;
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
