import { useSelector, useDispatch } from "react-redux";
import { updateAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => {
    if (state.filter === "ALL") {
      return state.anecdotes;
    } else {
      return state.anecdotes.filter((anecdote) =>
        anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
      );
    }
  });

  const dispatch = useDispatch();

  const vote = (id) => {
    console.log("vote", id);
    const findAnecdote = anecdotes.find((anecdote) => anecdote.id === id);
    dispatch(updateAnecdote(findAnecdote));
    dispatch(setNotification(`you voted '${findAnecdote.content}'`, 5));
  };

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
