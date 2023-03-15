import Draggable, { DraggableCore } from "react-draggable";

import ModalCard from "../ModalForm/ModalCard";

const WebModalContent = ({ children }) => {
  return (
    <Draggable>
      <div className="absolute top-0 left-0 bottom-0 right-0 z-50 m-10 ml-auto h-3/4 w-4/6 items-center justify-center rounded-lg  bg-[#1f2428] shadow-2xl">
        <div className=" mt-2 h-full w-full ">
          <button className="mr-auto ml-4 flex h-6  w-6 items-center justify-center rounded-full bg-red-500 p-2  text-white">
            {children}
          </button>

          <div className=" flex h-full w-full flex-col ">
            <iframe
              src="https://amil.dev"
              className=" h-full w-full rounded-b-lg shadow-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </Draggable>
  );
};
export default WebModalContent;
