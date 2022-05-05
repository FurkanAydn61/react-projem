import React, { useEffect, useState } from 'react'

const initialFormValues = {fullname: "", driver_number: "", team: ""};
function Form( {addDriver, drivers}) {
    const [form, setForm] = useState(initialFormValues);

        useEffect(() => {
            setForm({fullname: "", driver_number: "", team: ""});
        },[drivers])
    const onChangeInput = (e) => {
            setForm({...form, [e.target.name]: e.target.value });
    };
    const onSubmit = (e) => {
        e.preventDefault();
  
        if(form.fullname === "" || form.driver_number === "" || form.team === ""){
          return false;
        }
  
        addDriver([...drivers, form]);
      };
    
    return (
    <form onSubmit={onSubmit}>
     <div>
     <input
     name="fullname"
     placeholder="Full Name"
     value={form.fullname}
     onChange={onChangeInput}
    />     
    </div>   
    <div>
    <input
    name = "driver_number"
    placeholder = "Driver Number"
    value={form.driver_number}
    onChange={onChangeInput}
    />
    </div>
    <div>
    <input
    name = "team"
    placeholder="team"
    value={form.team}
    onChange={onChangeInput}
    />
    </div>
    <div className="btn">
        <button>Add</button>
    </div>
  
    </form>
  )
}

export default Form