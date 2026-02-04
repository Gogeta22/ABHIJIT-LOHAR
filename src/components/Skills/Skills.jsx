/* eslint-disable no-unused-vars */
import React from 'react'
import { SkillsInfo } from '../../constants'
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[10vw] sm:px-[10vw] md:px-[7vw] lg:px-[7vw]"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-8"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1F23]">
          SKILLS
        </h2>
        <div className="w-24 h-1 bg-[#2E5C7E] mx-auto mt-2"></div>
        <p className="text-[#132E35] text-lg mt-4 font-semibold">
          A collection of my technical skills and experience, honed through
          hands-on projects and real-world development.
        </p>
      </motion.div>

      {/* Skills categories */}
      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
        {SkillsInfo.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#0D1F23] backdrop-blur-md rounded-xl px-6 sm:px-10 py-8 sm:py-6 w-full sm:w-[48%] border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4 text-center">
              {category.title}
            </h3>

            {/* Skills items */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-1 rounded-xl bg-transparent border-2 border-gray-700 py-2 px-2 sm:px-2 sm:py-2 text-center"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <span className="text-gray-300 text-xs sm:text-sm">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills