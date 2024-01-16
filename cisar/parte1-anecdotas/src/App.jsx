import React, { useState } from 'react';

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The only way to go fast, is to go well.'
    ];

    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

    const handleNextAnecdote = () => {
        const randomIndex = Math.floor(Math.random() * anecdotes.length);
        setSelected(randomIndex);
    };

    const handleVote = () => {
        const newVotes = [...votes];
        newVotes[selected] += 1;
        setVotes(newVotes);
    };

    const mostVotesIndex = votes.indexOf(Math.max(...votes));

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <div>{anecdotes[selected]}</div>
            <p>has {votes[selected]} votes</p>
            <button onClick={handleVote}>vote</button>
            <button onClick={handleNextAnecdote}>next anecdote</button>

            <h1>Anecdote with most votes</h1>
            {votes[mostVotesIndex] > 0 && (
                <div>
                    <div>{anecdotes[mostVotesIndex]}</div>
                    <p>has {votes[mostVotesIndex]} votes</p>
                </div>
            )}
        </div>
    );
};

export default App;
