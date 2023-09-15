import { useState } from "react";
import toast from "react-hot-toast";

export default function useForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emptyFieldErrorToast = () => toast.error("Please fill all the fields");
  const invalidEmailErrorToast = () => toast.error("Please type a valid email");

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Validates the input
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      emptyFieldErrorToast();
      return;
    }

    if (!emailRegex.test(email)) {
      invalidEmailErrorToast();
      return;
    }

    //Send the email through fetch API to make it usable in toast
    const fetchData = async () => {
      try {
        const query = await fetch(
          `https://formsubmit.co/ajax/${import.meta.env.VITE_EMAIL}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              message,
            }),
          }
        );
        const response = await query.json();
        return response;
      } catch (error) {
        console.log(error);
        return Promise.reject(`${error}`);
      }
    };

    //Toast method to evaluate the fetch response
    toast.promise(fetchData(), {
      loading: "Sending...",
      error: "There was an error :(",
      success: "Email Sent!",
    });
  };

  return { handleSubmit, setName, setEmail, setMessage };
}
