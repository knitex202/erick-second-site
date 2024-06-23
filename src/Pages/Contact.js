import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  
  const [formdata, setFormData] = useState({
    name: "",
    user_email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('Customer_Input_knite', 'template_ufetdcp', formdata, 'J56SqAg1nmqQT3-C2')
      .then((response) => {
        alert('SUCCESS!', response.status, response.text);
        // handle success (e.g., show a success message)
      }, (error) => {
        alert('FAILED...', error);
        // handle error (e.g., show an error message)
      });
  };

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <div className="size-96 p-8 rounded-lg shadow-inner bg-white">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formdata.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="p-1 border border-slate-300 rounded-md shadow focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 "
          />
          <input
            type="email"
            name="user_email"
            value={formdata.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="p-1 border border-slate-300 rounded-md shadow focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
          />
          <textarea
            name="message"
            value={formdata.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="p-1 border border-slate-300 rounded-md shadow focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"></textarea>
          <button
            type="submit"
            className=" w-24 self-center p-2 border border-slate-300 rounded-md shadow text-stone-800 font-semibold hover:bg-slate-300 duration-500">
            Send
          </button>
        </form>
      </div>
      <div className="absolute bottom-2 right-2">
      <p className="mt-8 xl:mr-24 mr-4 font-semibold text-stone-800 ">Website created by: <span>Hassan Wilson</span> </p>
      </div>
    </div>
  );
}

export default Contact;
