const Filter = ( {newFilter, handleFilterChange} ) => {
    console.log('Filter component');
    return (
        <div>filter shown with 
        <input 
          value={newFilter}
          onChange={handleFilterChange}
        />
      </div>
    )
}

export default Filter