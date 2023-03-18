const Button = ({ handleClick, text }) => { 
    return (
        <button onClick={handleClick}>
        {text}
        </button>
    )
}


const Feedback = ({title, states}) => {
    console.log('Feedback:', '--> title:', title, '/ states:',states)
    return (
        <>
            <h1>{title}</h1>
            <Button handleClick={states.good.handler} text={states.good.name} />
            <Button handleClick={states.neutral.handler} text={states.neutral.name} />
            <Button handleClick={states.bad.handler} text={states.bad.name} />
        </>
    )
}

export default Feedback