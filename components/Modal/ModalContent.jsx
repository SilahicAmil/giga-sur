const ModalContent = ({ children }) => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="absolute left-0 top-0 right-0 bottom-0 m-auto flex h-2/3 w-2/3 items-center justify-center rounded-lg bg-white font-sans shadow-lg">
        <form
          className="flex h-full w-full flex-col items-center justify-center gap-8 bg-red-50"
          onSubmit={formSubmitHandler}
        >
          <div className="flex w-1/4 flex-col  ">
            <label htmlFor="message_to">To:</label>
            <input
              type="text"
              readOnly
              value="Amil Silahic - amil@amil.dev"
              className="flex w-full 
              "
            />
          </div>

          <div className="flex w-1/4 flex-col">
            <label htmlFor="subject">Subject:</label>
            <input type="text" name="subject" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message">Message:</label>
            <textarea name="message" cols="40" rows="5"></textarea>
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
          {children}
        </form>
      </div>
    </>
  );
};

export default ModalContent;
