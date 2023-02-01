const ModalContent = ({}) => {
  return (
    <>
      <form>
        <div>
          <label htmlFor="message_to">To:</label>
          <input type="text" readOnly value="Amil Silahic" />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" />
        </div>

        <div>
          <label htmlFor="message"></label>
        </div>
      </form>
    </>
  );
};

export default ModalContent;
