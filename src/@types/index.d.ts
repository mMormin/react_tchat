export type ChatState = {
  messages: TMessage[];
  inputValue: string;
};

export type TMessage = {
  id: string;
  content: string;
  author: string;
  date: string;
};

export type LoginState = {
  isVisible: boolean;
  credentials: {
    email: string;
    password: string;
  };
  pseudo: string;
  error: null | string;
  isLoading: boolean;
};

export type LoginCredentials = {
  email: string;
  password: string;
};
