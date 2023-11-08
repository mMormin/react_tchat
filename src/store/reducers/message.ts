import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppState, TText } from '../../@types';

const initialState: AppState = {
  messages: [
    {
      text: 'Salut Comment vas-tu ?',
      id: 0,
    },
    {
      text: 'Ca va et toi ?',
      id: 1,
    },
    {
      text: 'Oklm?',
      id: 2,
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
        text: action.payload,
        id: newId,
      });
    },
  },
});

export const { sendMessage } = messageSlice.actions;
export default messageSlice.reducer;
