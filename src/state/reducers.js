import { GETQUOTE as GET } from "./actions";

const quoteState = {
  quotes: [
    {
      quote: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    },
    {
      quote: `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`,
      author: "Marilyn Monroe",
    },
    {
      quote: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
      author: "Albert Einstein",
    },
    {
      quote: `So many books, so little time.`,
      author: "Frank Zappa",
    },
  ],
  selected: {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
};

const getRandomIndex = (arrayLength) => {
  return Math.floor(Math.random() * arrayLength);
};

export const quoteReducer = (state = quoteState, action) => {
  const { type } = action;
  console.log(state);

  switch (type) {
    case GET:
      const randomIndex = getRandomIndex(state.quotes.length);
      return {
        ...state,
        selected: state.quotes[randomIndex],
      };

    default:
      return state;
  }
};
