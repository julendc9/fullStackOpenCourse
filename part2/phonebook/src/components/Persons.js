import Note from './Note'

const Persons = ( {persons, newFilter} ) => {
    console.log('Persons component')
    return (
        <>
            {persons.filter(person => 
                person.name.toLowerCase().startsWith(newFilter.toLowerCase())
            ).map(person => 
                <Note key={person.id} person={person}/>
            )}
        </>
    )
}

export default Persons