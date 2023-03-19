import Feedback from "./Feedback"
import Statistics from "./Statistics"
import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    const newGood = good+1
    setGood(newGood)
    console.log('Added good:', '--> Good:', newGood)
  }

  const handleNeutralClick = () => {
    const newNeutral = neutral+1
    setNeutral(newNeutral)
    console.log('Added neutral:', '--> Neutral:', newNeutral)
  }

  const handleBadClick = () => {
    const newBad = bad+1
    setBad(newBad)
    console.log('Added bad:', '--> Bad:', newBad)
  }

  const states= {
    good: {
      name: 'good',
      value: good,
      handler: handleGoodClick
    },
    neutral: {
      name: 'neutral',
      value: neutral,
      handler: handleNeutralClick
    },
    bad: {
      name: 'bad',
      value: bad,
      handler: handleBadClick
    }
  }

  return (
    <>
    <Feedback title={'give feedback'} states={states}/>
    <Statistics title={'statistics'} states={states}/>
    </>
  )
}

export default App