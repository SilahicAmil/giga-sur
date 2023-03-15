import toast, { Toaster } from "react-hot-toast";
import { useRef, useState } from "react";

import ModalActions from "../ModalForm/ModalActions";
import ModalCard from "../ModalForm/ModalCard";
import emailjs from "@emailjs/browser";

const ModalContent = ({ children }) => {
  const formRef = useRef();

  console.log(import.meta.env.VITE_EMAIL_PUBLIC_KEY);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    try {
      emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_KEY,
        import.meta.env.VITE_EMAIL_TEMPLATE_KEY,
        formRef.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );
      formRef.current.reset();
      return toast.success("Message Sent!");
    } catch (err) {
      return toast.error("Unable to send Message. Please Try Again!");
    }
  };

  return (
    <>
      <Toaster
        toastOptions={{
          duration: 5000,
        }}
      />
      <ModalCard>
        <ModalActions>{children}</ModalActions>

        <section className="h-full w-full bg-gray-900">
          <div className="mx-auto max-w-screen-md py-8 px-4 ">
            <form
              onSubmit={formSubmitHandler}
              ref={formRef}
              className="space-y-8"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-white "
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  className="focus:ring-primary-500 focus:border-primary-500 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light block w-full rounded-lg border border-gray-300  bg-gray-700 p-2.5 text-sm text-gray-900  placeholder-gray-400 shadow-sm"
                  placeholder="John Smith"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium  text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="reply_to"
                  className="focus:ring-primary-500 focus:border-primary-500 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-700 p-2.5 text-sm text-gray-900  placeholder-gray-400 shadow-sm"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="myemail"
                  className="mb-2 block text-sm font-medium  text-gray-300"
                >
                  Send To
                </label>
                <input
                  type="myemail"
                  id="myemail"
                  className="focus:ring-primary-500 focus:border-primary-500 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-700 p-2.5 text-sm text-gray-900  placeholder-gray-400 shadow-sm"
                  placeholder="amil@amil.dev"
                  readOnly
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium  text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="focus:ring-primary-500 focus:border-primary-500 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-700 p-2.5 text-sm text-gray-900  placeholder-gray-400 shadow-sm"
                  placeholder="Leave a message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="hover:bg-primary-800 hover:bg-primary-700  rounded-lg bg-sky-700  py-3  px-5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-sky-300  sm:w-fit"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </ModalCard>
    </>
  );
};

export default ModalContent;
