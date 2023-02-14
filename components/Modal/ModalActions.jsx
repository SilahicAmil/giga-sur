import { useState } from "react";

const ModalActions = ({}) => {
  return (
    <>
      <div className="flex h-8 w-full items-center rounded-t-lg bg-[#1f2428]">
        <div className="ml-4 flex items-center gap-4">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2"></span>
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-yellow-400 p-2"></span>
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500 p-2"></span>
        </div>
      </div>
    </>
  );
};

export default ModalActions;
