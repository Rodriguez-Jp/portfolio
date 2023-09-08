import { motion } from "framer-motion";

export default function NavigationAside() {
  return (
    <motion.div
      className="fixed right-10 top-1/3 hidden 2xl:block text-white font-game h-full z-20"
      animate={{ x: [1200, 0] }}
      transition={{ duration: 0.5, delay: 2 }}
    >
      <ul className="flex flex-col p-0 items-center ">
        <li className="p-5 hover:scale-110 hover:opacity-90 transition-transform duration-150">
          <a href="#presentation">Presentation</a>
        </li>
        <li className="p-5 hover:scale-110 hover:opacity-90 transition-transform duration-150">
          <a href="#projects">Projects</a>
        </li>
        <li className="p-5 hover:scale-110 hover:opacity-90 transition-transform duration-150">
          <a href="#contact-me">Contact me</a>
        </li>
      </ul>
    </motion.div>
  );
}
