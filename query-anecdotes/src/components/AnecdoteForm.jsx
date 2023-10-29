import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAnecdote } from "../utils/requests";

const AnecdoteForm = () => {
  const queryClient = useQueryClient();

  const newNoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["anecdotes"] });
    },
  });

  const getId = () => (10000 * Math.random()).toFixed(0);

  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    newNoteMutation.mutate({
      content,
      id: getId(),
      votes: 0,
    });
    event.target.anecdote.value = "";
    console.log("new anecdote");
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
