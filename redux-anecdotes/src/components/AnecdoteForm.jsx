import { useDispatch } from "react-redux";
import setNotification from "../utils/showNotification";
import { createAnecdote } from "../reducers/anecdoteReducer.js";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const anecdote = async (event) => {
    event.preventDefault();
    const newAnecdote = event.target.anecdote.value;
    dispatch(createAnecdote(newAnecdote));
    setNotification(dispatch, `Added anecdote: ${newAnecdote}`);
    event.target.anecdote.value = "";
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>create new</h2>
      <form onSubmit={anecdote}>
        <div>
          <input type="text" name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
