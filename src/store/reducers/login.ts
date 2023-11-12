import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginState } from '../../@types';

const initialState: LoginState = {
  isVisible: false,
  email: '',
  password: '',
};

const loginSlice = createSlice({
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
} = loginSlice.actions;
export default loginSlice.reducer;
