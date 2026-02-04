/* eslint-disable no-unused-vars */
import React from "react";
import { eduction } from "../../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="edu"
      className="py-24 pb-24 px-[10vw] sm:px-[10vw] md:px-[7vw] lg:px-[7vw]"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1F23] text-center">
          Education
        </h2>
        <div className="w-32 h-1 bg-[#2E5C7E] mx-auto mt-4"></div>
        <p className="text-[#132E35] text-lg mt-4 font-semibold mb-16 text-center">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </motion.div>

      {/* Education Cards */}
      <div className="space-y-8">
        {eduction.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 bg-[#111827] border border-gray-700 p-6 hover:border-purple-500 transition"
          >
            {/* Logo */}
            <div className="shrink-0">
              <img
                src={item.img}
                alt={item.school}
                className="w-20 h-20 object-contain rounded-lg bg-white p-2"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white">
                {item.school}
              </h3>

              <p className="text-sm text-gray-400 mt-1">{item.degree}</p>

              <p className="text-sm text-gray-400 mt-1">{item.date}</p>

              <p className="text-sm text-purple-400 mt-2">
                Grade: {item.grade}
              </p>

              <p className="text-gray-300 mt-4 leading-relaxed">{item.decs}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
