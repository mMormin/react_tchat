export type TText = string;
export type TAuthor = string;

export type AppState = {
  messages: TMessage[];
};

export type TMessage = {
  id: number;
  text: TText;
  author: string;
};
