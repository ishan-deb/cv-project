import '../styles/Forms.css'

export default function GenInfoForm() {
  return (
    <div className='form-container'>
      <h2>General Information</h2>
      <form action="" className='gen-info'>
        <label>
          <span>Name</span>
          <input type="text" name="name" id="name"/>
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" id="email"/>
        </label>
        <label>
          <span>Phone No.</span>
          <input type="number" name="phone-no" id="phone-no" />
        </label>

        
      </form>
      <button type="submit">Submit</button>
    </div>
  )
}