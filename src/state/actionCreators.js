import { GETQUOTE as GET } from "./actions";

export const getQuote = () => {
  return {
    type: GET,
  };
};
