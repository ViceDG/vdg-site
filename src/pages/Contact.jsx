import React, { useState } from "react";
import * as emailjs from "emailjs-com";

const Contact = (props) => {
  const contactConfig = {
    USER_EMAIL: "ViceDevGroup@Gmail.com",
    description:
      "Need an app or website built? Write to us and we'll get back to you as soon as possible!",
    SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
    TEMPLATE_ID: process.env.REACT_APP_TEMPLATE_ID,
    USER_ID: process.env.REACT_APP_USER_ID,
  };

  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    budget: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });
    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.USER_EMAIL,
      message: formData.message + " $" + formData.budget,
    };

    emailjs
      .send(
        contactConfig.SERVICE_ID,
        contactConfig.TEMPLATE_ID,
        templateParams,
        contactConfig.USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            loading: false,
            alertmessage: "SUCCESS! Looking forward to reading your email.",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            alertmessage: `Failed to send!,${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact">
      <div className="about">
        <div className="mb-5 mt-3 pt-md-3">
          <h1 className="projTitle">CONTACT US</h1>
        </div>
        <p>{contactConfig.description}</p>
        <br />
        <p>
          <strong>Email us at:</strong>{" "}
          <a href={`mailto:${contactConfig.USER_EMAIL}`}>
            {contactConfig.USER_EMAIL}
          </a>
        </p>
        <p>
          <br />
          <strong>Or:</strong> Fill out the contact form below!
        </p>
        <div className="contactFormContainer">
          <form onSubmit={handleSubmit} className="">
            <div className="formFields">
              <input
                className="nameInput"
                id=""
                name="name"
                placeholder="Name"
                value={formData.name || ""}
                type="text"
                required
                onChange={handleChange}
              />
              <br />
              <input
                className="emailInput"
                id=""
                name="email"
                placeholder="Email"
                type="email"
                value={formData.email || ""}
                required
                onChange={handleChange}
              />
              <br />
              <input
                className="nameInput"
                id=""
                name="budget"
                placeholder="Budget"
                type="number"
                value={formData.budget || ""}
                required
                onChange={handleChange}
              />
            </div>
            <textarea
              className="messageInput"
              placeholder="Summary of your project..."
              id=""
              name="message"
              divs="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <div>
              <div className="form-group">
                <button className="startButton" type="submit">
                  {formData.loading ? "Sending..." : "Send"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
