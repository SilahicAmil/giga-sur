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
        <form
          className="flex h-full  w-full flex-col items-center justify-center gap-8 rounded-lg bg-slate-400"
          onSubmit={formSubmitHandler}
        >
          <div className="flex w-1/4 flex-col  ">
            <label htmlFor="message_to">To:</label>
            <input
              type="text"
              readOnly
              value="Amil Silahic - amil@amil.dev"
              className="flex w-full bg-white text-black"
            />
          </div>

          <div className="flex w-1/4 flex-col">
            <label htmlFor="subject">Subject:</label>
            <input type="text" name="subject" className="bg-white text-black" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              cols="40"
              rows="5"
              className="bg-white text-black"
            />
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
          {children}
        </form>
      </ModalCard>
    </>
  );
};

export default ModalContent;
