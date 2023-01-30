import { AiFillApple } from "react-icons/ai";

const TopNav = ({}) => {
  return (
    <div className="flex w-full h-6">
      <nav className="flex">
        <div className="flex gap-4">
          <span className="text-lg ml-2 items-center flex text-white ">
            <AiFillApple />
          </span>

          <span className="text-md flex items-center">Finder</span>
        </div>
        <div className="flex ml-4 items-center">
          <ul className="text-sm flex gap-3 items-center">
            <li>File</li>
            <li>Edit</li>
            <li>View</li>
            <li>Go</li>
            <li>Window</li>
            <li>Help</li>
            <div className="ml-auto flex items-center">
              {/* need to make this based off the current date and time */}
              <li>Mon Jan 30 03:33 PM</li>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default TopNav;
