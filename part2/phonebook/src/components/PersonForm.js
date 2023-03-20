const PersonForm = ( props ) => {
    console.log('PersonForm component')
    return (
        <form onSubmit={props.addPerson}>
        <div>
          name: 
          <input 
            value={props.newName}
            onChange={props.handleNameChange}
          />
          <br></br>
          number:
          <input 
            value={props.newNumber}
            onChange={props.handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        <div>debug: {props.newName}</div>
      </form>
    )
}

export default PersonForm