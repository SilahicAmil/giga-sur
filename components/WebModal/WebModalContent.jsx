import { AiOutlineLock } from "react-icons/ai";
import Draggable from "react-draggable";

const WebModalContent = ({ children }) => {
  return (
    <Draggable>
      <div className="absolute top-0 left-0 bottom-0 right-0 z-50 m-10 ml-auto h-3/4 w-4/6 items-center justify-center rounded-lg  bg-[#1f2428] shadow-2xl">
        <div className=" mt-2 h-full w-full ">
          <div className="mr-auto ml-4 flex h-12  w-full items-center">
            <button className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500  p-4  text-white">
              {children}
            </button>

            <div className="flex w-full items-center justify-center">
              <div className="text-md flex w-1/3 justify-center rounded-md border border-gray-500">
                <p className="flex items-center gap-2 text-white">
                  <AiOutlineLock />
                  https://amil.dev
                </p>
              </div>
            </div>
          </div>

          <div className=" flex h-full w-full flex-col ">
            <iframe
              src="https://amil.dev"
              className=" h-full w-full rounded-b-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </Draggable>
  );
};
export default WebModalContent;
