import { createPortal } from "react-dom";
import { useState } from "react";

const DesktopItem = ({}) => {
  const [showModal, setShowModal] = useState(false);
  const modalContent = document.getElementById("modal-content");
  return (
    <>
      <div className="">
        <h1>Hello Everhbody</h1>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
        {showModal &&
          createPortal(
            <div
              className="bg-blue-500 flex items-center justify-center absolute m-auto w-64 left-0 top-0 right-0 bottom-0 h-64 "
              onClick={() => setShowModal(false)}
            >
              This is the modal lol
              <button onClick={(prevState) => !prevState}>Close</button>
            </div>,
            modalContent
          )}
      </div>
    </>
  );
};

export default DesktopItem;
