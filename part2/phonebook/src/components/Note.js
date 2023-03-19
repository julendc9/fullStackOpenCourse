const Note = ( {person} ) => {
    console.log('person', person)
    return (
        <div>{person.name} {person.number}</div>
    )
}

export default Note