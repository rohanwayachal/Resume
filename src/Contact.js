import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div id="contact">
      <h2 className="cheader">Get In Touch</h2>
      <hr />
      <div className="contact">
        <div className="contact-left">
          <h4>Contact Me</h4>
          <ul className="contact-line">Email</ul>
          <ul>
            <input name="email" size="65" />
          </ul>

          <ul className="contact-line">Subject</ul>
          <ul>
            <input className="subject" name="subject" size="65" />
          </ul>

          <ul className="contact-line">Message</ul>
          <ul>
            <textarea name="body" rows="6" cols="60" />
          </ul>
          <ul className="submit">
            <button value="Submit" name="body" rows="10" cols="60">
              Submit
            </button>
          </ul>
        </div>

        <div className="contact-right">
          <h4>Address</h4>
          <ul className="contact-line">ronwayachal@gmail.com</ul>

          <ul className="contact-line">Contact No: +1 (657)-445-7885</ul>

          <h4 className="social">Social Links</h4>
          <ul className="contact-line">
            {" "}
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn{" "}
          </ul>

          <ul className="contact-line">
            {" "}
            <FontAwesomeIcon icon={faGithub} /> Github
          </ul>

          <ul className="contact-line">
            {" "}
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </ul>

          <ul className="contact-line">
            {" "}
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </ul>
        </div>
      </div>
    </div>
  );
}
