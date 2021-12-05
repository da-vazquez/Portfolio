import React, {useState} from 'react';
import "./Contact.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHandPointRight } from 'react-icons/fa';

AOS.init({
  duration: 1000,
  easing: 'ease-in-out-back'
})

const initialValues = {name: '', phone: '', email: '', message: ''}
 
const ContactForm = () => {
  const [values, setValues] = useState(initialValues)
  const [sent, setSent] = useState("Send")

  const handleChange = (e) => {
    e.preventDefault()
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch('https://contact-server-dv.herokuapp.com/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify(values),
        });
        setSent('Message Sent!');
        
        let result = await response.json();
        console.log(result.status)
    }    
    catch (error) {
      console.log('unable to send message', error.message)
    }
  }
   
  return (
    <div className='contact-section'>
    <div className= 'contact-form' id='contact'>
      <form onSubmit={handleSubmit}>
      <label className="form-label">Name:</label>
      <input
        id='name'
        placeholder='enter name'
        name='name'
        type='text'
        onChange={handleChange}
        value={values.name}
        required='true'
      />
 
      <label className="form-label">Phone Number:</label>
      <input
        id='phone'
        placeholder='enter phone number'
        name='phone'
        type='text'
        onChange={handleChange}
        value={values.phone}
        required='true'
      />

      <label className='form-label'>Email:</label>
      <input
        id='email'
        placeholder='enter email address'
        name='email'
        type='email'
        onChange={handleChange}
        value={values.email}
        required='true'
      />

      <label className='form-label'>Message:</label>
      <input
        id='message'
        placeholder='enter message'
        name='message'
        type='text'
        onChange={handleChange}
        value={values.message}
        required='true'
      />

      <button className='submit-button' type='submit'>{sent}</button>
    </form>
  </div>

    <div className='contact-text'>
    <div className='text-items'>
    <div className="fa-hand-point-right" data-aos='slide-right' data-aos-once='true'><FaHandPointRight/></div>
      <h2>I'd love to hear from you</h2>
      </div>
    </div>
  </div>
  );
 };


 export default ContactForm;
