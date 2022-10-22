import { getActiveElement } from '@testing-library/user-event/dist/utils'
import { useState } from 'react'

const Button = (props) => {
    return (
        <button onClick={props.click}>{props.text}</button>
    )
}

const FeedBack = (props) => {
    const { good, neutral, bad } = props.count
    const { setGood, setNeutral, setBad } = props.method
    let all = props.count.all
    const gc = () => { setGood(good + 1); all++ }
    const nc = () => { setNeutral(neutral + 1); all++ }
    const bc = () => { setBad(bad + 1); all++ }
    return (
        <>
            <h1>Give feedback</h1>
            <Button click={gc} text="good" />
            <Button click={nc} text="neutral" />
            <Button click={bc} text="bad" />
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
    const { good, neutral, bad, all, average, positive } = props.count
    const toPercent = (number) => {
        if (typeof number !== "number") return "0";
        return (String)((positive * 100).toFixed(2)).concat(" %");
    }
    if (all === 0) return (
        <>
            <h1>Statistics</h1>
            No feedback given.
        </>
    )
    else return (
        <>
            <h1>Statistics</h1>
            <Show level="good" count={good} />
            <Show level="neutral" count={neutral} />
            <Show level="bad" count={bad} />
            <Show level="all" count={all} />
            <Show level="average" count={average} />
            <Show level="positive" count={toPercent(positive)} />
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
        bad: bad,
        all: good + neutral + bad,
        average: (good - bad) / (good + neutral + bad),
        positive: good / (good + neutral + bad)
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