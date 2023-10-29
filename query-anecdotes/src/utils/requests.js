import axios from "axios";

const getAnecdotes = () =>
  axios.get("http://localhost:3001/anecdotes").then((res) => res.data);

export default getAnecdotes;
