import { motion } from "framer-motion";

export default function Project({ project }) {
  const {
    projectTitle,
    projectDescription,
    projectImg,
    projectLink,
    githubLink,
  } = project;

  return (
    <motion.div
      className="bg-[#1e435d] shadow rounded-xl text-gray-300"
      whileHover={{
        backgroundColor: "#3dc9a4",
        scale: 1.01,
        color: "#000",
        x: -7,
      }}
    >
      {/* Image zone */}
      <div className="p-5">
        <img
          src={projectImg}
          alt={projectTitle}
          className="rounded-xl h-[200px] w-full"
        />
      </div>
      {/* Text zone */}
      <div className="px-5 ">
        <h1 className="font-bold text-xl">{projectTitle}</h1>
        <p className="font-game">{projectDescription}</p>
      </div>
      {/* Button zone*/}
      <div className="px-5 font-game p-5 flex justify-evenly">
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          Live demo
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </div>
    </motion.div>
  );
}
