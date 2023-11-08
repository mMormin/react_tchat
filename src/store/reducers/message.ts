import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppState, TText } from '../../@types';

const initialState: AppState = {
  messages: [
    {
      id: 0,
      text: 'Salut!! comment ca va ?',
      author: 'Maxime',
    },
    {
      text: 'Ca va oklm et toi ?',
      id: 1,
      author: 'Bernard',
    },
    {
      id: 2,
      text: 'On est laaa',
      author: 'Maxime',
    },
  ],
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    sendMessage(state, action: PayloadAction<TText>) {
      const newId = state.messages.length;

      state.messages.push({
        id: newId,
        text: action.payload,
        author: 'Maxime',
      });
    },
  },
});

export const { sendMessage } = messageSlice.actions;
export default messageSlice.reducer;
