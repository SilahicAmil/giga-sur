import { AiFillApple } from "react-icons/ai";

const TopNav = ({}) => {
  return (
    <div className="flex h-8 w-full items-center justify-center bg-transparent">
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
        <div className="mr-4 flex items-center justify-center text-sm">
          {/* need to make this based off the current date and time */}
          <p>Mon Jan 30 03:33 PM</p>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
