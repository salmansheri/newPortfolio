import React, { useRef, useState } from "react";
import "./contact.css";
import Phone from "../../assets/images/phone.png";
import Email from "../../assets/images/email.png";
import Address from "../../assets/images/address.png";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [done, setDone]= useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zfpr5qr",
        "template_g8novxs",
        formRef.current,
        "hv4euPfaAUglLMmBP"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss about Your Project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              99448 74518
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              sheriffsalman00@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              4/54G, Indian Nagar, Gangaleri,Krishnagiri.
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What is Your story?</b>
            Get in touch. Always freelancing if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="username" />
            <input type="text" placeholder="Subject" name="usersubject" />
            <input type="text" placeholder="Email" name="useremail" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && <p>Thank you!</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
