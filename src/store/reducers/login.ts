import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { LoginCredentials, LoginState } from '../../@types';

const initialState: LoginState = {
  isVisible: false,
  credentials: {
    email: 'maxime@gmail.io',
    password: 'azerty',
  },
  pseudo: 'Maxime',
  error: null,
  isLoading: false,
};

export const login = createAsyncThunk(
  'login',
  async (credentials: LoginCredentials) => {
    const { data } = await axios.post<{ pseudo: string }>(
      'http://localhost:3001/login',
      credentials
    );

    return data;
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    toggleUserSettings(state) {
      state.isVisible = !state.isVisible;
    },

    changeInputLoginValue(
      state,
      action: PayloadAction<{
        fieldName: keyof LoginState['credentials'];
        value: string;
      }>
    ) {
      const { fieldName, value } = action.payload;
      state.credentials[fieldName] = value;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.rejected, (state) => {
        state.error = 'Email ou mot de passe incorrect';
        state.isLoading = false;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.isVisible = false;
        state.isLoading = false;
        state.pseudo = action.payload.pseudo;
      });
  },
});

export const { toggleUserSettings, changeInputLoginValue } = loginSlice.actions;
export default loginSlice.reducer;
