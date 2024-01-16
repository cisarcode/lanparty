import { useState } from 'react'
import PropTypes from "prop-types";

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
);

Button.propTypes = {
    handleClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

const StatisticLine = ({ text, value }) => (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
);

StatisticLine.propTypes = {
    text: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};


const Statistics = ({ good, neutral, bad }) => {

    const total = good + neutral + bad;
    const average = total ? (good - bad) / total : 0;
    const positive = total ? (good / total) * 100 : 0;

    if (total === 0) {
        return <p>No feedback given</p>;
    }

    return (
        <table>
            <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={average.toFixed(1)} />
            <StatisticLine text="positive" value={positive.toFixed(1) + '%'} />
            </tbody>
        </table>
    );
};
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
};

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={() => setGood(good + 1)} text="good" />
            <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
            <Button handleClick={() => setBad(bad + 1)} text="bad" />
            <h2>statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    );
};

export default App;
