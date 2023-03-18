const StatisticLine = ({ text, value }) => { 
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


const Statistics = ({title, states}) => {
  console.log('Statistics:', '--> title:', title, '/ states:',states)

  const all = () => states.good.value+states.neutral.value+states.bad.value
  const average = () => (states.good.value - states.bad.value)/all()
  const positive = () => states.good.value/all()*100

  if(all() === 0){
    return (
      <>
        <h1>{title}</h1>
        <div>No feedback given</div>
      </>
    )
  } else 
  {
    return (
      <>
        <h1>{title}</h1>
        <table>
        <StatisticLine text={states.good.name} value ={states.good.value} />
        <StatisticLine text={states.neutral.name} value ={states.neutral.value} />
        <StatisticLine text={states.bad.name} value ={states.bad.value} />
        <StatisticLine text="all" value ={all()} />
        <StatisticLine text="average" value ={average()} />
        <StatisticLine text="positive" value ={positive()+ ' %'} />
        </table>
      </>
    )
  }
}

export default Statistics