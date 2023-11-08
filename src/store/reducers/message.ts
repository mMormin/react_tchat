import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppState, TMessage } from '../../@types';

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
    // getMessages(state, action: PayloadAction<TMessage>) {
    //   state.text = action.payload;
    //   state.id += 1;
    // },
  },
});

export const {} = messageSlice.actions;
export default messageSlice.reducer;
