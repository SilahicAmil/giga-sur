import { AiFillApple } from "react-icons/ai";

const TopNav = ({}) => {
  return (
    <div className="flex w-full h-8 items-center justify-center bg-transparent">
      <nav className="flex">
        <div className="flex gap-4">
          <div className="text-lg h-full ml-2 items-center flex text-white ">
            <AiFillApple />
          </div>

          <p className="text-sm flex items-center">Finder</p>
        </div>

        <div className="flex items-center ml-4 ">
          <ul className="text-sm flex gap-3 items-center">
            <li>File</li>
            <li>Edit</li>
            <li>View</li>
            <li>Go</li>
            <li>Window</li>
            <li>Help</li>
          </ul>
        </div>
      </nav>
      <div className="ml-auto flex items-center gap-4 text-sm">
        <div>
          <AiFillApple />
        </div>
        <div>
          <AiFillApple />
        </div>
        <div>
          <AiFillApple />
        </div>
        <div>
          <AiFillApple />
        </div>
        <div className="flex items-center justify-center text-sm mr-4">
          {/* need to make this based off the current date and time */}
          <p>Mon Jan 30 03:33 PM</p>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
