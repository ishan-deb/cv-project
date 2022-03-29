import { useState } from 'react'
import '../styles/Forms.css'

export default function WorkExpForm() {

  const [compName, setCompName] = useState('')
  const [position, setPosition] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  
  const resetForm = () => {
    setCompName('')
    setPosition('')
    setStartDate('')
    setEndDate('')
  }

  const handleSubmit = e => {
    e.preventDefault()

    const workForm = {
      compName,
      position,
      startDate,
      endDate
    }

    console.table(workForm)

    resetForm()
  }
  return (
    <div className='form-container' onSubmit={handleSubmit}>
      <h2>Work Experience</h2>
      <form className="work-exp">
        <label>
          <span>Company Name</span>
          <input 
            type="text" 
            id="comp-name" 
            onChange={e => setCompName(e.target.value)}
            value={compName}
            />
        </label>

        <label>
          <span>Position</span>
          <input 
            type="text" 
            id="position" 
            onChange={e => setPosition(e.target.value)}
            value={position}
            />
        </label>

        <label>
          <span>From</span>
          <input 
            type="number"
            id="start-date" 
            placeholder='YYYY'
            onChange={e => setStartDate(e.target.value)}
            value={startDate}
            />
        </label>

        <label>
          <span>To</span>
          <input 
            type="text" 
            id="end-date" 
            placeholder='YYYY or Present'
            onChange={e => setEndDate(e.target.value)}
            value={endDate}
            />
        </label>
        
        <button type="submit">Submit</button>
      </form>
      
    </div>
  )
}