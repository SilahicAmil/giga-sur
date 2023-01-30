import NavItems from "./NavItems";

const BottomNav = ({}) => {
  return (
    <div className="z-1 gap-4 flex w-3/6 h-24 bg-red-300 rounded-lg justify-center items-center m-auto">
      <NavItems />
      <NavItems />
      <NavItems />
      <NavItems />
      <NavItems />
      <NavItems />
      <NavItems />
      <NavItems />
    </div>
  );
};

export default BottomNav;
