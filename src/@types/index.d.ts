export type TText = string;

export type AppState = {
  messages: TMessage[];
};

export type TMessage = {
  id: number;
  text: TText;
};
