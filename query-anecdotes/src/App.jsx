import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAnecdotes, vote } from "./utils/requests";

const App = () => {
  const queryClient = useQueryClient();

  const updateAnecdoteMutation = useMutation({
    mutationFn: vote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["anecdotes"] });
    },
  });

  const { isLoading, isError, data } = useQuery({
    queryKey: ["anecdotes"],
    queryFn: getAnecdotes,
    retry: 2,
  });

  const handleVote = (anecdote) => {
    updateAnecdoteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 });
    console.log("vote");
  };

  if (isLoading) {
    return <div>loading data...</div>;
  }

  if (isError) {
    return <div>anecdote service not available due to problems in server</div>;
  }

  const anecdotes = data;
  console.log(anecdotes);

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
