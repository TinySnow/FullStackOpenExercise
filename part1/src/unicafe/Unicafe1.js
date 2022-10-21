import { useState } from 'react'
const FeedBack = (props) => {

    return (
        <>
            <h1>Give feedback</h1>
            <button />
            <button />
            <button />
        </>
    )
}

const Statistics = () => {

}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <FeedBack />
            <Statistics />
        </div>
    )
}

export default App