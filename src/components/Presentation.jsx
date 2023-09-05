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
        <motion.div
          className="mx-auto w-full text-center hover:opacity-80 md:block hidden "
          animate={{ x: [-5000, 0, 300] }}
        >
          <button
            className="text-xl text-project-green hover:translate-x-2 transition-transform duration-75"
            onPointerDownCapture={(e) => e.stopPropagation()}
          >
            Projects →
          </button>
        </motion.div>

        <motion.div
          className="mx-auto w-full text-center hover:opacity-80 md:hidden block"
          animate={{ x: [-5000, 0] }}
          transition={{ duration: 1 }}
        >
          <button className="text-xl text-project-green">Projects →</button>
        </motion.div>
      </section>
    </>
  );
}
