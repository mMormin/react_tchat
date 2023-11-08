export type TText = `${string}`;
export type TId = number;

export type AppState = {
  messages: TMessage[];
};

export type TMessage = {
  id: TId;
  text: TText;
};
