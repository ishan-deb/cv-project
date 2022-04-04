import { useEffect, useState } from 'react'
import '../styles/Forms.css'

export default function GenInfoForm() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [genForm, setGenForm] = useState(null)
  const [genInfo, setGenInfo] = useState([])

  const resetForm = () => {
    setName('')
    setEmail('')
    setPhoneNo('')
  }

  const handleSubmit = e => {
    e.preventDefault()
     setGenForm ({
      name,
      email,
      phoneNo
    })
    resetForm()
  }

  useEffect(() => {
    if (genForm) {
      setGenInfo(prevGenInfo => [...prevGenInfo ,genForm])
    }
  }, [genForm])

  useEffect(() => {
    if (genInfo) {
      console.table(genInfo)
    }
  },[genInfo])

  return (
    <div className='form-container' >
      <h2>General Information</h2>
      <form onSubmit={handleSubmit} className='gen-info'>
        <label>
          <span>Name</span>
          <input 
            type="text" 
            id="name" 
            onChange={e => setName(e.target.value)}
            value={name}
            />
        </label>
        <label>
          <span>Email</span>
          <input 
            type="email" 
            id="email" 
            onChange={e => setEmail(e.target.value)} 
            value={email}
            />
        </label>
        <label>
          <span>Phone No.</span>
          <input 
            type="number" 
            id="phone-no" 
            onChange={e => setPhoneNo(e.target.value)}
            value={phoneNo}
            />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}