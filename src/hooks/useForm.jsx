import { useState } from "react";
import toast from "react-hot-toast";

export default function useForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emptyFieldErrorToast = () => toast.error("Please fill all the fields");
  const invalidEmailErrorToast = () => toast.error("Please type a valid email");
  const successToast = () => toast.success("Email sent!");

  const handleSubmit = (e) => {
    //Validates the input
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      e.preventDefault();
      emptyFieldErrorToast();
      return;
    }

    if (!emailRegex.test(email)) {
      e.preventDefault();
      invalidEmailErrorToast();
      return;
    }

    successToast();
  };

  return { handleSubmit, setName, setEmail, setMessage };
}
