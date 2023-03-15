import Draggable from "react-draggable";

const ModalCard = ({ children }) => {
  return (
    <>
      <Draggable>
        <div className="z-1 absolute top-0 left-0 bottom-0 right-0 m-16 flex h-3/4 w-2/3 flex-col items-center justify-center rounded-lg bg-[#1f2428] font-sans shadow-lg">
          {children}
        </div>
      </Draggable>
    </>
  );
};

export default ModalCard;
