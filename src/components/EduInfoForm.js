import { useState } from 'react'
import '../styles/Forms.css'

export default function EduInfoForm() {
  const [degreeLevel, setDegreeLevel] = useState('')
  const [schoolName, setSchoolName] = useState('')
  const [fieldOfStudy, setFieldOfStudy] = useState('')
  const [gradDate, setGradDate] = useState('')

  const resetForm = () => {
    setDegreeLevel('')
    setSchoolName('')
    setFieldOfStudy('')
    setGradDate('')
  }

  const handleSubmit = e => {
    e.preventDefault()

    const eduForm = {
      degreeLevel,
      schoolName,
      fieldOfStudy,
      gradDate
    }

    console.table(eduForm)

    resetForm()
  }

  return (
    <div className='form-container'>
      <h2>Educational Information</h2>
      <form className="edu-info" onSubmit={handleSubmit}>
        <label>
          <span>Degree level</span>
          <input 
            type="select" 
            id="degree-level"
            onChange={e => setDegreeLevel(e.target.valuel)}
            value={degreeLevel}
            />
        </label>

        <label>
          <span>School Name</span>
          <input 
            type="text" 
            id="school-name"
            onChange={e => setSchoolName(e.target.value)}
            value={schoolName} 
            />
        </label>

        <label>
          <span>Field of Study</span>
          <input 
            type="text" 
            id="field-of-study"
            onChange={e => setFieldOfStudy(e.target.value)}
            value={fieldOfStudy}
            />
        </label>

        <label>
          <span>Graduation Date</span>
          <input 
            type="date" 
            id="grad-date"
            onChange={e => setGradDate(e.target.value)}
            value={gradDate}
            />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}