import { createSlice } from "@reduxjs/toolkit";
import AnecdoteService from "../services/anecdotes";

const sortAnecdotes = (anecdotes) =>
  anecdotes.sort((a, b) => b.votes - a.votes);

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    addAnecdote(state, action) {
      return sortAnecdotes([...state, action.payload]);
    },
    addVote(state, action) {
      console.log(action.payload);
      return sortAnecdotes(
        state.map((anecdote) =>
          anecdote.id === action.payload
            ? { ...anecdote, votes: anecdote.votes + 1 }
            : anecdote
        )
      );
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { addAnecdote, addVote, appendAnecdote, setAnecdotes } =
  anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await AnecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newNote = await AnecdoteService.createNew(content);
    dispatch(appendAnecdote(newNote));
  };
};

export default anecdoteSlice.reducer;
