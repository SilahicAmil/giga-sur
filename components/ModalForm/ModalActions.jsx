const ModalActions = ({ children }) => {
  return (
    <>
      <div className="flex h-10 w-full items-center rounded-t-lg bg-[#1f2428]">
        <div className="ml-4 flex h-10 items-center gap-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 p-2 text-xl text-white">
            {children}
          </span>
        </div>
      </div>
    </>
  );
};

export default ModalActions;
