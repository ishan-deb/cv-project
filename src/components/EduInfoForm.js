export default function EduInfoForm() {
  return (
    <div>
      <h2>Educational Information</h2>
      <form action="" className="edu-info">
        <label>
          <span>Degree level</span>
          <input type="select" id="degree-level"/>
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
          <input type="number" id="grad-date" />
        </label>
      </form>
    </div>
  )
}