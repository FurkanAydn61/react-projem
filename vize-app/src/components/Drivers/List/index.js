import {useState} from 'react'

function List( { drivers } ) {
  const [filterText, setFilterText] = useState('');

  const filtered = drivers.filter((item) =>{
    return Object.keys(item).some((key)=>
        item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });
  console.log("filtered", filtered);
  return (
    <div>
    <input placeholder="Filter Drivers"
    value={filterText}
    onChange={(e) => setFilterText(e.target.value)}/>
      <ul className="list">
        {
          filtered.map((driver, i) => (
            <li key={i}>
              <span>{driver.fullname}</span>
              <span>{driver.driver_number}</span>
              <span>{driver.team}</span>
            </li>
          
          ))}
        </ul>
        <p>Total drivers {filtered.length}</p>
    </div>
  )
}

export default List