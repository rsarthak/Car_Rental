import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2kck73k', 'template_khms6ej', form.current, 'D9bjX40-UdQo3dmWl')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast.success('Email sent successfully!', { autoClose: 1000 });
   }, (err) => {
      console.log('FAILED...', err);
      toast.error('Failed to send email. Please try again later.', { autoClose: 1000 });
   });
  };
  return (    
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; (123) 456-7869
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                sarthakr748@gmail.com
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp; Hamirpur,
                Himachal Pradesh
              </a>
            </div>
            <div className="contact-div__form">
             
            <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <button value="Send">Send</button>
    </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(123) 456-7869</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
      <ToastContainer />

    </>
  );
}

export default Contact;