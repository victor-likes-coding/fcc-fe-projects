import { createStore } from "redux";

import { quoteReducer } from "./reducers";

export const store = createStore(quoteReducer);
