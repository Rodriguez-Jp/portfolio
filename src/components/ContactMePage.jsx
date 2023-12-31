import { Toaster } from "react-hot-toast";
import useForm from "../hooks/useForm";

export default function ContactMePage() {
  const { handleSubmit, setName, setEmail, setMessage } = useForm();

  return (
    <section className="mt-20 md:max-w-4xl mx-auto p-5 md:p-0" id="contact-me">
      <Toaster
        toastOptions={{
          className: "bg-project-main-blue text-white",
        }}
      />
      <div className=" text-3xl font-bold text-slate-300 text-center md:text-left">
        <h1>
          Let<span className="text-project-green">'</span>s Talk
          <span className="text-project-green">!</span>
        </h1>
      </div>
      <div className="md:max-w-3xl mx-auto mt-7 font-game">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Your name"
              className="p-2 text-white w-full mb-4 bg-project-main-blue border border-project-green rounded-xl placeholder:text-white focus:outline-none focus:border-2"
              onChange={(e) => setName(e.target.value)}
              name="name"
            />
            <input
              type="email"
              placeholder="Your email"
              className="p-2 text-white w-full mb-4 bg-project-main-blue border border-project-green rounded-xl placeholder:text-white focus:outline-none focus:border-2"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
            <textarea
              type="text"
              placeholder="What you want to talk...."
              className="p-2 text-white w-full mb-4 bg-project-main-blue border border-project-green rounded-xl placeholder:text-white resize-none focus:outline-none focus:border-2"
              rows={4}
              onChange={(e) => setMessage(e.target.value)}
              name="text"
            />
            <input
              type="submit"
              value="Send"
              className="bg-project-green p-2 mt-2 text-xl text-white rounded-lg cursor-pointer hover:scale-105 transition-transform duration-150 "
            />
          </div>
        </form>
      </div>
    </section>
  );
}
