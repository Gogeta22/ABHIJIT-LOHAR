/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
   
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lttwbju",
        "template_z7t5va9",
        form.current,
        "NJxm4sqBVnExXNsq4"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section id="contact" className="py-4 px-[7vw] mt-16 md:mt-24 lg:mt-32">
      <ToastContainer />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1F23]">
          CONTACT US
        </h2>
        <div className="w-24 h-1 bg-[#2E5C7E] mx-auto mt-3"></div>
        <p className="text-[#132E35] text-base sm:text-lg mt-4 font-semibold max-w-2xl mx-auto">
          I’m open to job opportunities and professional connections. Feel free
          to reach out for collaborations or inquiries.
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-2 md:gap-16">

        {/* Left Side Form */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form
            className="space-y-8 sm:space-y-10"
            ref={form}
            onSubmit={sendEmail}
          >
            {/* Name */}
            <div>
              <label className="block text-sm text-black mb-1">Name</label>
              <input
                name="user_name"
                type="text"
                required
                className="w-full bg-transparent border-b border-black focus:outline-none py-1"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-black mb-1">Email</label>
              <input
                name="user_email"
                type="email"
                required
                className="w-full bg-transparent border-b border-black focus:outline-none py-1"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-black mb-1">Message</label>
              <textarea
                name="message"
                rows="2"
                required
                className="w-full bg-transparent border-b border-black focus:outline-none py-1 resize-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="mt-6 w-full bg-[#1e1e1e] text-white py-3 uppercase tracking-widest text-sm hover:bg-black transition"
            >
              Send
            </button>
          </form>
        </motion.div>

        {/* Right Side Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h3 className="text-lg sm:text-xl font-medium text-black mb-6">
            Talk to me
          </h3>

          <p className="text-black mb-2 text-sm sm:text-base">
            +91 9767095597
          </p>
          <p className="text-black mb-8 text-sm sm:text-base">
            abhilohar2201@gmail.com
          </p>

          {/* Social Icons */}
          <div className="hidden md:flex space-x-4">
            <a
              href="https://github.com/Gogeta22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0D1F23] hover:text-[#2E5C7E]"
            >
              <FiGithub size={24} />
            </a>

            {/* FIXED LINK */}
            <a
              href="https://www.linkedin.com/in/abhijeet-lohar-3a1209303"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0D1F23] hover:text-[#2E5C7E]"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
