import React from 'react';
import './contact.css';
// import {MdOutlineEmail} from 'react-icons/md';
// import {AiOutlineInstagram, AiOutlineWhatsApp} from 'react-icons/ai';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            {/* <MdOutlineEmail className='contact_option-icon' /> */}
            <h4>Email</h4>
            <h5>fakeacake@gmail.com</h5>
            <a href="mailto:ss0305@srmist.edu.in">Send A Message</a>
          </article>
          <article className="contact_option">
            {/* <AiOutlineInstagram className='contact_option-icon'/> */}
            <h4>Instagram</h4>
            <h5>Fake A Cake</h5>
            <a href="suru242000@">Send A Message</a>
          </article>
          <article className="contact_option">
            {/* <AiOutlineWhatsApp className='contact_option-icon'/> */}
            <h4>WhatsApp</h4>
            <h5>+91987654321</h5>
            <a href="https://api.whatsapp.com/send?phone=+917801972499">Send A Message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit'className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;