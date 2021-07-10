import './Contact.css'

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h1>Contact Form</h1>
      <form className="contact-form-container">
        <div className="form-label">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-input" id="name" placeholder="Name" />
          </div>
        <div className="form-label">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-input" id="email" placeholder="Email" />
          </div>
        <div className="form-label">
          <label htmlFor="phone">Email</label>
          <input type="text" className="form-input" id="phone" placeholder="Phone Number" />
          </div>
        <div className="form-label">
          <label htmlFor="message">Message</label>
          <textarea className="form-input" id="message" placeholder="Message" />
          </div>
        <div className="form-label">
          <label htmlFor="submit">Select from the following:</label>
          <select className="form-input" id="submit" type="dropdown">
            <option value="">--Select--</option>
            <option value="/">Job Offer</option>
            <option value="/">Collab on Project</option>
            <option value="/">Technical Question</option>
            <option value="/">Website issue</option>
            </select>
          </div>

        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
