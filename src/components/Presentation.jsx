export default function Presentation() {
  return (
    <>
      {/* text section */}
      <section className="max-w-5xl flex flex-col justify-center mt-44  mx-auto  text-white ">
        <p className="text-2xl text-project-green p-2 text-left ml-20 font-game">
          Hi, my name is
        </p>
        <div className="text-center">
          <h1 className=" text-6xl font-bold">
            <span className="text-slate-300 p-2">Juan Pablo Rodriguez</span>
          </h1>
        </div>
        <div className="w-full md:flex block">
          <div className="md:basis-1/2 basis-0"></div>
          <p className=" mt-5 text-lg font-thin text-slate-200 md:basis-1/2 font-game">
            A passionate software engineering student and Web Developer who
            loves to build projects and create things for people.
          </p>
        </div>
      </section>
      {/* Button section */}
      <section className="max-w-5xl mx-auto mt-8 font-game">
        <div className="w-1/2 mx-auto text-center md:grid md:grid-cols-2 md:gap-x-24">
          <button className="bg-project-green p-2 w-full border-2 border-black font-regular text-xl">
            Projects
          </button>
          <div></div>
          <div></div>
          <button className="bg-project-green p-2 w-full border-2 border-black font-regular text-xl mt-3 sm:mt-0">
            Contact me
          </button>
        </div>
      </section>
    </>
  );
}
