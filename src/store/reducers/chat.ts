import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppState, TContent } from '../../@types';

const initialState: AppState = {
  messages: [
    {
      id: crypto.randomUUID(),
      content: 'Salut!! comment ca va ?',
      author: 'Maxime',
    },
    {
      id: crypto.randomUUID(),
      content: 'Ca va oklm et toi ?',
      author: 'Bernard',
    },
    {
      id: crypto.randomUUID(),
      content: 'On est laaa',
      author: 'Maxime',
    },
  ],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage(state, action: PayloadAction<string>) {
      const newMessage = {
        id: crypto.randomUUID(),
        content: action.payload,
        author: 'Maxime',
      };

      state.messages.push(newMessage);

      state.inputValue = '';
    },
  },
});

export const { sendMessage } = chatSlice.actions;
export default chatSlice.reducer;
