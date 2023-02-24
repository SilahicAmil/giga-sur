import ModalCard from "../ModalForm/ModalCard";

const WebModalContent = ({ children }) => {
  return (
    <div>
      <div className="absolute top-0 left-0 bottom-0 right-0 z-50 m-16 flex h-2/3 w-2/3 flex-col items-center justify-center rounded-lg bg-[#1f2428] font-sans shadow-lg">
        <button className="mr-auto ml-4 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 p-2 text-white">
          {children}
        </button>
        <div className=" flex h-full w-full flex-col">
          <iframe src="https://amil.dev" className=" h-full w-full"></iframe>
        </div>
      </div>
    </div>
  );
};
export default WebModalContent;
