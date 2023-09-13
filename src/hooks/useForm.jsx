import { useState } from "react";
import toast from "react-hot-toast";

export default function useForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emptyFieldErrorToast = () => toast.error("Please fill all the fields");
  const invalidEmailErrorToast = () => toast.error("Please type a valid email");
  const successToast = () => toast.success("Email sent!");

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Validates the input
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      // e.preventDefault();
      emptyFieldErrorToast();
      return;
    }

    if (!emailRegex.test(email)) {
      // e.preventDefault();
      invalidEmailErrorToast();
      return;
    }

    const fetchData = async () => {
      try {
        const query = await fetch(
          "https://formsubmit.co/ajax/juanrdrz16@gmail.com",
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

    toast.promise(fetchData(), {
      loading: "Sending...",
      error: "There was an error :(",
      success: "Email Sent!",
    });
  };

  return { handleSubmit, setName, setEmail, setMessage };
}
