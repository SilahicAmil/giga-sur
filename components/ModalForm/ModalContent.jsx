import { useRef, useState } from "react";

import ModalActions from "../ModalForm/ModalActions";
import ModalCard from "../ModalForm/ModalCard";
import emailjs from "@emailjs/browser";

const ModalContent = ({ children }) => {
  const formRef = useRef();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // idk why .env files wont work for this
    emailjs.sendForm(
      "service_4hpeoas",
      "template_4jmafdm",
      formRef.current,
      "SCNS9M5weTyzUQKKH"
    );
    // add uef for removing the formSubmitted
    setFormSubmitted(true);
    formRef.current.reset();
  };

  return (
    <>
      <ModalCard>
        <ModalActions />
        <section className="h-full w-full bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-screen-md py-8 px-4 lg:py-16">
            <form
              onSubmit={formSubmitHandler}
              ref={formRef}
              className="space-y-8"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="John Smith"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="reply_to"
                  className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="name@gmail.com"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Leave a message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="hover:bg-primary-800  dark:hover:bg-primary-700 rounded-lg bg-sky-700 py-3 px-5  text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:focus:ring-sky-800 sm:w-fit"
              >
                Send message
              </button>
            </form>
            {formSubmitted ? (
              <div>
                <p className="text-white">Message Sent!</p>
              </div>
            ) : undefined}
          </div>
          <div className="flex w-full items-center justify-center rounded-sm bg-sky-300 text-lg text-black">
            {children}
          </div>
        </section>
      </ModalCard>
    </>
  );
};

export default ModalContent;
