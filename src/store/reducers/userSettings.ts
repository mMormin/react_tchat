import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserSettingsState } from '../../@types';

const initialState: UserSettingsState = {
  isVisible: false,
  email: '',
  password: '',
};

const chatSlice = createSlice({
  name: 'userSettings',
  initialState,
  reducers: {
    toggleUserSettings(state) {
      state.isVisible = !state.isVisible;
    },

    changeEmailValue(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },

    changePasswordValue(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },

    connectUser(state) {
      state.email = '';
      state.password = '';
    },
  },
});

export const {
  toggleUserSettings,
  changeEmailValue,
  changePasswordValue,
  connectUser,
} = chatSlice.actions;
export default chatSlice.reducer;
