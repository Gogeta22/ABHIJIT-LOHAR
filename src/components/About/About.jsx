/* eslint-disable no-unused-vars */
import React from "react";
import ReactTypingEffect from "react-typing-effect";
import ProfileImage from "../../assets/image.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[7vw] mt-16 md:mt-24 lg:mt-32 "
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 "
        >
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#0D1F23] leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-[#0D1F23] leading-tight">
            Abhijit Lohar
          </h2>

          {/* Skill heading with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#2E5C7E] leading-tight">
            <span className="text-[#0D1F23] ">I am a</span>{" "}
            <ReactTypingEffect
              text={["Fullstack Developer", "UX/UI desginer", "Coder"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#0D1F23]">{cursor}</span>
              )}
            />
          </h3>

          {/* About me paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-[#132E35] mb-10 mt-8 leading-tight">
            I’m a Full-Stack Developer fresher with a passion for building
            modern, responsive websites and designing clean, user-friendly
            interfaces. I enjoy working on both frontend and backend
            development and love combining code with good UI/UX design to
            create smooth and engaging digital experiences. I’m always eager
            to learn new technologies and grow as a developer.
          </p>

          {/* Resume Button */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #0D1F23, #163A40)",
              boxShadow: "0 0 2px #0D1F23, 0 0 6px #0D1F23, 0 0 40px #0D1F23",
            }}
          >
            DOWNLOAD CV
          </a>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={ProfileImage}
            alt="Abhijit Lohar"
            className="w-[40vw] rounded-full object-cover drop-shadow-[0_12px_24px_rgba(13,31,35,0.65)]"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default About;
