import HardDriveIcon from "../../public/static/images/mac-hard-drive.png";

const DesktopItem = ({}) => {
  return (
    <>
      <div className="ml-auto flex flex-col">
        <div className="flex h-36 w-32 flex-col items-center p-2 font-sans hover:cursor-pointer active:border-2 active:border-sky-300">
          <div className="flex h-full w-24 flex-col items-center  ">
            <img
              src={HardDriveIcon}
              alt="hard drive icon"
              className="rounded-xl p-2"
            />

            <p className="text-md">Giga Sur</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopItem;
