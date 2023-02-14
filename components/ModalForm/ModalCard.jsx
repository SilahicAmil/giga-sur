const ModalCard = ({ children }) => {
  return (
    <>
      <div className="absolute top-0 left-0 bottom-0 right-0 z-50 m-16 flex h-2/3 w-2/3 flex-col items-center justify-center rounded-lg bg-[#1f2428] font-sans shadow-lg">
        {children}
      </div>
    </>
  );
};

export default ModalCard;
