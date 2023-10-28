import { useDispatch } from "react-redux";
import { addAnecdote } from "../reducers/anecdoteReducer.js";
import setNotification from "../utils/showNotification";
import AnecdoteService from "../services/anecdotes.js";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const anecdote = async (event) => {
    event.preventDefault();
    const newAnecdote = await AnecdoteService.createNew(
      event.target.anecdote.value
    );
    console.log("Add anecdote:", newAnecdote);
    dispatch(addAnecdote(newAnecdote));
    setNotification(dispatch, `Added anecdote: ${newAnecdote.content}`);
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
