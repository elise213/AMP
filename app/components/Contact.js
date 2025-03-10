"use client";
import React, { useContext, useRef } from "react";
import { Context } from "../context/appContext";
import styles from "../styles/contact.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Link from "next/link";
import FakeNavbar from "./FakeNavbar";

const Contact = () => {
  const { actions } = useContext(Context);
  const form = useRef();
  const SERVICE_ID = "service_betnze8";
  const TEMPLATE_ID = "template_99iigjc";
  const PUBLIC_KEY = "bSrh0TD_khQU1Jash";

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <div className="contact-page">
      {/* <FakeNavbar /> */}
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        {/* <div className="contact-call">
          <span className="close-contact" onClick={actions.toggleContactModal}>
            <i className="fa-solid fa-x"></i>
          </span>
        </div> */}
        <div className="contact-form-div">
          <div className="form-col">
            <input
              type="text"
              id="nameInput"
              name="name"
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="form-col">
            <input
              type="text"
              id="emailInput"
              name="email"
              className="form-control"
              placeholder="Email address"
            />
          </div>
        </div>
        <div className="contact-form-div">
          <div className="form-col-full">
            <textarea
              id="contactTextArea"
              name="message"
              className="form-control"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
        <div className="form-col-full">
          <button className="send-button" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
