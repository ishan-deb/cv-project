import { useState } from 'react'
import '../styles/Forms.css'

export default function GenInfoForm() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNo, setPhoneNo] = useState('')

  const resetForm = () => {
    setName('')
    setEmail('')
    setPhoneNo('')
  }

  const handleSubmit = e => {
    e.preventDefault()

    const genForm = {
      name,
      email,
      phoneNo
    }

    console.table(genForm)

    resetForm()
  }
  return (
    <div className='form-container' onSubmit={handleSubmit}>
      <h2>General Information</h2>
      <form className='gen-info'>
        <label>
          <span>Name</span>
          <input 
            type="text" 
            id="name" 
            onChange={e => {setName(e.target.value)}}
            value={name}
            />
        </label>
        <label>
          <span>Email</span>
          <input 
            type="email" 
            id="email" 
            onChange={e => {setEmail(e.target.value)}} 
            value={email}
            />
        </label>
        <label>
          <span>Phone No.</span>
          <input 
            type="number" 
            id="phone-no" 
            onChange={e => {setPhoneNo(e.target.value)}}
            value={phoneNo}
            />
        </label>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  )
}