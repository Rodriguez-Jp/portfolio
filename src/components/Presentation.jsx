import { animate, motion } from "framer-motion";

export default function Presentation() {
  return (
    <>
      {/* text section */}
      <section className="max-w-5xl flex flex-col justify-center mt-44  mx-auto  text-white ">
        <motion.div
          initial={{ x: -5000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-2xl text-project-green p-2 text-left ml-20 font-game">
            Hi, my name is
          </p>
        </motion.div>
        <motion.div
          className="text-center mt-2"
          initial={{ x: -5000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className=" text-6xl font-bold">
            <span className="text-slate-300 p-2">Juan Pablo Rodriguez</span>
          </h1>
        </motion.div>
        <motion.div
          className="w-full md:flex block"
          initial={{ x: -5000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="md:basis-1/2 basis-0"></div>
          <p className=" mt-5 md:text-lg font-thin text-slate-200 md:basis-1/2 font-game text-small p-2 md:p-0 text-center md:text-left">
            A passionate software engineering student and Web Developer who
            loves to build projects and create things for people.
          </p>
        </motion.div>
      </section>
      {/* Button section */}
      <section className="max-w-5xl mx-auto mt-8 font-game">
        <div className="w-1/2 mx-auto text-center md:grid md:grid-cols-2 md:gap-x-24">
          <motion.div
            animate={{ scale: [0, 1.5, 1] }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <button className="bg-project-green p-2 w-full border-2 border-black font-regular text-xl">
              Projects
            </button>
          </motion.div>
          <div></div>
          <div></div>
          <motion.div
            animate={{ scale: [0, 1.5, 1] }}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            <button className="bg-project-green p-2 w-full border-2 border-black font-regular text-xl mt-3 sm:mt-0">
              Contact me
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
