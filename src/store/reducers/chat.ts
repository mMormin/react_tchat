import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ChatState } from '../../@types';

const initialState: ChatState = {
  messages: [
    {
      id: crypto.randomUUID(),
      content: 'Salut!! comment ca va ?',
      author: 'Moi',
      date: '10:50',
    },
    {
      id: crypto.randomUUID(),
      content: 'Ca va oklm et toi ?',
      author: 'Bernard',
      date: '10:55',
    },
    {
      id: crypto.randomUUID(),
      content: 'On est laaa',
      author: 'Moi',
      date: ' 10:56',
    },
  ],
  inputValue: '',
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    changeInputValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },

    sendMessage(state, action: PayloadAction<string>) {
      const today = new Date();
      const formattedDate = new Intl.DateTimeFormat('fr-FR', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      }).format(today);

      const newMessage = {
        id: crypto.randomUUID(),
        content: action.payload,
        author: 'Moi',
        date: formattedDate,
      };

      state.messages.push(newMessage);

      state.inputValue = '';
    },
  },
});

export const { changeInputValue, sendMessage } = chatSlice.actions;
export default chatSlice.reducer;
