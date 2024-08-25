import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

function Contact() {

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData(form.current);
    const data = Object.fromEntries(formdata.entries());

    emailjs.send('Customer_Input_knite', 'template_ufetdcp', data, 'J56SqAg1nmqQT3-C2')
      .then((response) => {
        alert('SUCCESS!', response.status, response.text);
        // handle success (e.g., show a success message)
      }, (error) => {
        alert('FAILED...', error);
        // handle error (e.g., show an error message)
      });
  };

  return (
    <div className="flex flex-col w-full h-screen sm:h-full md:h-full xl:h-screen bg-stone-900 justify-center items-center">
      <div className="sm:my-24 size-96 p-8 rounded-lg shadow-inner bg-white">
        <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-1 border border-slate-300 rounded-md shadow focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 "
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-1 border border-slate-300 rounded-md shadow focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="p-1 border border-slate-300 rounded-md shadow focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"></textarea>
          <button
            type="submit"
            value="Send"
            className=" w-24 self-center p-2 border border-slate-300 rounded-md shadow text-stone-800 font-semibold hover:bg-slate-300 duration-500">
            Send
          </button>
        </form>
      </div>
      <div className=" flex w-full justify-end">
      <p className="mt-8 xl:mr-24 mr-4 font-semibold text-stone-800 ">Website created by: <span>Hassan Wilson</span> </p>
      </div>
    </div>
  );
}

export default Contact;
