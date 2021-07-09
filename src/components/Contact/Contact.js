import './Contact.css'

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h1>Contact Form</h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        return false
      }}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" placeholder="Message" />
        </div>
        <button type="submit" className="btn btn-default">Send</button>
      </form>
    </div>
  )
}

export default ContactForm
