// actions.tsx is for async actions
import { createAsyncThunk } from '@reduxjs/toolkit';

// postForm
export const postForm = createAsyncThunk(
  'form/postForm',
  async function (data, { rejectWithValue }) {
    try {
      const response = await fetch('https://api.sbercloud.ru/content/v1/bootcamp/frontend', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      console.log(response);
      return { response };
    } catch (err) {
      // return rejectWithValue(err.message);
    }
  }
);
