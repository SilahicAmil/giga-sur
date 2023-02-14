import ModalActions from "./ModalActions";
import ModalCard from "./ModalCard";

const ModalContent = ({ children }) => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <ModalCard>
        <ModalActions />
        <section class="h-full w-full bg-white dark:bg-gray-900">
          <div class="mx-auto max-w-screen-md py-8 px-4 lg:py-16">
            <form action="#" class="space-y-8">
              <div>
                <label
                  for="email"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Let me know how you feel!"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Leave a message..."
                ></textarea>
              </div>
              <button
                type="submit"
                class="hover:bg-primary-800  dark:hover:bg-primary-700 rounded-lg bg-sky-700 py-3 px-5  text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:focus:ring-sky-800 sm:w-fit"
              >
                Send message
              </button>
            </form>
          </div>
          <div className="text-lg">
            <button className="ml-auto flex w-full items-center justify-center rounded-sm bg-sky-500 p-1">
              {children}
            </button>
          </div>
        </section>
      </ModalCard>
    </>
  );
};

export default ModalContent;
