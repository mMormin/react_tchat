export type ChatState = {
  messages: TMessage[];
  inputValue: string;
};

export type TMessage = {
  id: string;
  content: string;
  author: string;
};
