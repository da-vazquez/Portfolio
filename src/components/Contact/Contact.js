import React from 'react';
import { useFormik } from 'formik';
import "./Contact.css";


const validate = values => {
  const errors = {};
 
    if (!values.username) {
    errors.username = 'username required';
    } else if (values.username.length < 6) {
    errors.username = 'Username must be at least 6 characters';
    }
 
    if (!values.password) {
      errors.password = 'password required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
 
   return errors;
 };
 
const ContactForm = (props) => {

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      message: ''
     }
     ,
      validate,
      
      onSubmit: async(values) => {
        console.log(values)
        FormReset();
     }}
     )

     const FormReset = () => {
      Array.from(document.querySelectorAll("input")).forEach(
        input => (input.value = ""))
      
    }

    /* {formik.errors.username ? <div style={{color: 'red'}}>{formik.errors.name}</div> : null}
    {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.phone}</div> : null}
    {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
    {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.message}</div> : null} */
   
    return (
      <div className="contact-section" id="contact">
      
      <div className= 'contact-form'>
        <form onSubmit={formik.handleSubmit}>
        <label className="form-label">Name:</label>
        <input
          id='name'
          placeholder='enter name'
          name='name'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
 
        <label className="form-label">Phone Number:</label>
        <input
          id='phone'
          placeholder='enter phone number'
          name='phone'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />

        <label className="form-label">Email:</label>
        <input
          id='email'
          placeholder='enter email address'
          name='email'
          type='email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />

        <label className="form-label">Message:</label>
        <input
          id='message'
          placeholder='enter message'
          name='message'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />

      <button className='submit-button' type='submit'>Submit</button>
    </form>
  </div>

    <div className='contact-text'>
      <div className='text-items'>
        <h2>I'd love to hear from you <span>
        <i class="far fa-hand-point-right"></i></span></h2>
      </div>
    </div>
  </div>
  );
 };


 export default ContactForm;
