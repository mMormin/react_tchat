export type ChatState = {
  messages: TMessage[];
  inputValue: string;
};

export type TMessage = {
  id: string;
  content: string;
  author: string;
};

export type LoginState = {
  isVisible: boolean;
  email: string;
  password: string;
};
