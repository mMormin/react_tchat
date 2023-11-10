export type ChatState = {
  messages: TMessage[];
  inputValue: string;
  userSettings: boolean;
};

export type TMessage = {
  id: string;
  content: string;
  author: string;
};
