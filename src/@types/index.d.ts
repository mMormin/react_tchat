export type TContent = string;
export type TAuthor = string;

export type AppState = {
  messages: TMessage[];
};

export type TMessage = {
  id: string;
  content: TContent;
  author: string;
};
