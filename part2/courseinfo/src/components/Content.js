const Part = ({name, exercises}) => {
    return (
      <>
        <p>
            {name} {exercises}
        </p>
      </>
    )
  }

const Content = ({parts}) => {
  console.log('parts', parts)
    return (
        <>
            {parts.map(part => 
              <Part key={part.id} name={part.name} exercises={part.exercises}/>
            )}
        </>
    )
}

export default Content