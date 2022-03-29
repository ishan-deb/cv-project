import '../styles/Forms.css'

export default function EduInfoForm() {
  
  const handleChange = e => {
    console.log(e.target.value)
  }

  return (
    <div className='form-container'>
      <h2>Educational Information</h2>
      <form aclassName="edu-info">
        <label>
          <span>Degree level</span>
          <input type="select" id="degree-level" onChange={handleChange}/>
        </label>

        <label>
          <span>School Name</span>
          <input type="text" id="school-name" />
        </label>

        <label>
          <span>Field of Study</span>
          <input type="text" id="field-of-study" />
        </label>

        <label>
          <span>Graduation Date</span>
          <input type="date" id="grad-date" />
        </label>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  )
}