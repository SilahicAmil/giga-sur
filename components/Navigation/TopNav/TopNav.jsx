import { AiFillApple, AiOutlineSearch, AiOutlineWifi } from "react-icons/ai";

import { FiBluetooth } from "react-icons/fi";
import { TiBatteryCharge } from "react-icons/ti";

const TopNav = ({}) => {
  const currDate = new Date().toLocaleString();

  return (
    <div className=" flex h-8 w-full items-center justify-center bg-gray-800  font-sans text-white shadow-2xl">
      <nav className="flex">
        <div className="flex gap-4">
          <div className="ml-2 flex h-full items-center text-lg text-white ">
            <AiFillApple />
          </div>

          <p className="flex items-center text-sm">Finder</p>
        </div>

        <div className="ml-4 flex items-center ">
          <ul className="flex items-center gap-3 text-sm">
            <li>File</li>
            <li>Edit</li>
            <li>View</li>
            <li>Go</li>
            <li>Window</li>
            <li>Help</li>
          </ul>
        </div>
      </nav>
      <div className="ml-auto flex items-center gap-4">
        <div>
          <AiOutlineSearch className="text-lg" />
        </div>
        <div>
          <FiBluetooth className="text-md" />
        </div>
        <div>
          <AiOutlineWifi className="text-xl" />
        </div>
        <div className="flex">
          <span className="mr-1.5 flex items-center justify-center text-sm">
            69%
          </span>
          <TiBatteryCharge className="text-2xl" />
        </div>
        <div className="mr-4 flex  items-center justify-center text-sm">
          <p>{currDate}</p>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
