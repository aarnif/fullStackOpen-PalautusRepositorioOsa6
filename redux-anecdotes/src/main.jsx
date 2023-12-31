import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import { setAnecdotes } from "./reducers/anecdoteReducer";
import anecdoteService from "./services/anecdotes";

anecdoteService.getAll().then((notes) => store.dispatch(setAnecdotes(notes)));

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
