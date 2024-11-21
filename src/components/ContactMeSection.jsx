import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Titulo } from "./Titulo.jsx"

export const ContactMeSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS details
    const serviceID = "service_1165nj4";
    const templateID = "template_8sbz38u";
    const userID = "hdueURwSVagdEeUTs";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Failed to send the message. Please try again.");
        }
      );
  };

  const generalLetras = "font-Ysabeau font-normal text-wrap text-amberMine placeholder-amberMine text-xl";
  const inputBasicStyle = "bg-amber-100 bg-opacity-10 border border-slate-50 backdrop-blur-lg flex w-[966px] p-14 rounded-[60px] gap-x-7 items-center";

  return (
    <section id="Contact" className="text-center pb-16 main-section">
      <Titulo titulo="Contact Me" />
      <form onSubmit={handleSubmit} className="flex flex-wrap justify-center mt-16 items-center gap-8 max-w-[966px] mx-auto">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`${inputBasicStyle} h-[120px] ${generalLetras}`}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`${inputBasicStyle} h-[120px] ${generalLetras}`}
          placeholder="Your Email Address"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`${inputBasicStyle} h-[480px] resize-none ${generalLetras}`}
          placeholder="Your Message"
          required
        />
        <button type="submit" id="SendButton" className="w-[966px] h-[120px] bg-amber-300 rounded-[60px] flex items-center justify-center gap-x-4">
          <span className="font-tanNimbus text-6xl text-slate-50">Send</span>
        </button>
      </form>
      {status && <p className="mt-4 text-amberMine text-xl">{status}</p>}
    </section>
  );
};
