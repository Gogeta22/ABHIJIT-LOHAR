/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Projects } from "../../constants";
import { motion } from "framer-motion";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModel = (project) => {
    setSelectedProject(project);
  };
  const handleCloseModel = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[7vw] mt-16 md:mt-24 lg:mt-32"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-[#0D1F23]">PROJECTS</h2>
        <div className="w-32 h-1 bg-[#2E5C7E] mx-auto mt-4"></div>
        <p className="text-[#132E35] text-lg mt-4 font-semibold">
          A curated selection of projects that reflect my technical skills and
          practical experience.
        </p>
      </motion.div>

      {/* Project Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Projects.map((project, index) => (
          <motion.div
            key={project.id}
            onClick={() => handleOpenModel(project)}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="border border-white bg-[#0D1F23] backdrop-blur-md shadow-2xl overflow-hidden cursor-pointer hover:shadow-[#0D1F23] hover:translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-4 pt-4 line-clamp-3">
                {project.description}
              </p>

              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-300 text-xs font-semibold text-[#212342] px-2 py-1 mt-2 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-9 z-50 flex items-center justify-center bg-black/90 p-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-900 shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative border border-gray-600"
          >
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModel}
                className="text-white text-3xl font-bold hover:text-[#2E5C7E]"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[90%] object-contain shadow-2xl"
                />
              </div>

              <div className="lg:p-8 p-6">
                <h3 className="text-md lg:text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-300 mb-6 text-sm lg:text-base">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-300 text-xs font-semibold text-[#212342] px-2 py-1 mt-2 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-200 hover:text-[#2E5C7E] text-[#0D1F23] lg:py-2 px-2 py-1 lg:text-xl text-sm font-semibold text-center"
                  >
                    View Code
                  </a>

                  <a
                    href={selectedProject.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-[#2E5C7E] hover:text-gray-400 text-[#0D1F23] lg:py-2 px-2 py-1 lg:text-xl text-sm font-semibold text-center"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Work;
