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
      return sortAnecdotes(
        state.map((anecdote) =>
          anecdote.id === action.payload.id ? action.payload : anecdote
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
    const newAnecdote = await AnecdoteService.createNew(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const updateAnecdote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await AnecdoteService.update(anecdote);
    dispatch(addVote(updatedAnecdote));
  };
};

export default anecdoteSlice.reducer;
