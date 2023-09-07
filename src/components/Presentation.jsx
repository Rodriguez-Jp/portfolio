import { animate, motion } from "framer-motion";
import { Gradient } from "../helpers/gradient";
export default function Presentation() {
  const gradient = new Gradient();

  gradient.initGradient("#gradient-canvas");
  return (
    <section className=" flex flex-col items-center relative">
      <div className="absolute -z-10 ">
        <canvas id="gradient-canvas" data-transition-in className="h-full" />
      </div>
      {/* text section */}
      <div className="max-w-5xl flex flex-col justify-end mx-auto h-[50%]  text-white">
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
      </div>
      {/* Button section */}
      <div className="max-w-5xl mt-8 mx-auto font-game">
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
      </div>
    </section>
  );
}
