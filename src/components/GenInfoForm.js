import { useState } from 'react'
import '../styles/Forms.css'

export default function GenInfoForm() {

  const [name, setName] = useState(null)

  return (
    <div className='form-container'>
      <h2>General Information</h2>
      <form className='gen-info'>
        <label>
          <span>Name</span>
          <input type="text" name="name" id="name" onChange={e => {
            setName(e.target.value)
            console.log(name)
          }}/>
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" id="email"/>
        </label>
        <label>
          <span>Phone No.</span>
          <input type="number" name="phone-no" id="phone-no" />
        </label>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  )
}