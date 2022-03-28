export default function WorkExpForm() {
  return (
    <div>
      <h2>Work Experience</h2>
      <form action="" className="work-exp">
        <label>
          <span>Company Name</span>
          <input type="text" id="comp-name" />
        </label>

        <label>
          <span>Position</span>
          <input type="text" id="position" />
        </label>

        <label>
          <span>Date</span>
          <input type="date" id="date" />
        </label>
      </form>
    </div>
  )
}