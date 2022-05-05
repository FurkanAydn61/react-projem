import { useState, useEffect } from 'react'
import "./styles.css"
import Form from './Form'
import List from './List'

function Drivers() {
    const [drivers, setDrivers] = useState([
        {
            fullname: "Lewis Hamilton",
            driver_number: "44",
            team: "Mercedes"
        },{
            fullname: "Charles Leclerc",
            driver_number: "16",
            team: "Ferrari"
        },{
            fullname: "Max Verstappen",
            driver_number: "1",
            team: "Redbull"
        },
    ]);
    useEffect(() => {
        console.log(drivers);
    },[drivers])
  return (
    <div id="container">
    
    <h1>Drivers</h1>
    <List drivers={drivers}/>
    <Form addDriver={setDrivers} drivers = {drivers}/>

    </div>
    


  )
}

export default Drivers