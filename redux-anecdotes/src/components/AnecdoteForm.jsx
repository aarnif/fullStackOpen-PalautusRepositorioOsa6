import { useDispatch } from "react-redux";
import { addAnecdote } from "../reducers/anecdoteReducer.js";
import { showNotification } from "../reducers/notificationReducer.js";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const anecdote = (event) => {
    const newAnecdote = event.target.anecdote.value;
    event.preventDefault();
    console.log("Add anecdote:", newAnecdote);
    dispatch(addAnecdote(newAnecdote));
    dispatch(showNotification(`Added anecdote: ${newAnecdote}`));
    console.log("New anecdote submitted!");
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
