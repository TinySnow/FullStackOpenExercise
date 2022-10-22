import { useState } from 'react'

const Button = (props) => {
    return (
        <button onClick={props.click}>{props.text}</button>
    )
}

const FeedBack = (props) => {
    const { good, neutral, bad } = props.count
    const { setGood, setNeutral, setBad } = props.method
    return (
        <>
            <h1>Give feedback</h1>
            <Button click={() => setGood(good + 1)} text="good" />
            <Button click={() => setNeutral(neutral + 1)} text="neutral" />
            <Button click={() => setBad(bad + 1)} text="bad" />
        </>
    )
}

const Show = (props) => {
    return (
        <>
            {props.level} {props.count}<br />
        </>
    )
}

const Statistics = (props) => {
    const { good, neutral, bad } = props.count
    return (
        <>
            <h1>Statistics</h1>
            <Show level="good" count={good} />
            <Show level="neutral" count={neutral} />
            <Show level="bad" count={bad} />
        </>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const count = {
        good: good,
        neutral: neutral,
        bad: bad
    }

    const method = {
        setGood: setGood,
        setNeutral: setNeutral,
        setBad: setBad
    }

    return (
        <div>
            <FeedBack method={method} count={count} />
            <Statistics count={count} />
        </div>
    )
}

export default App