import NavItems from "./NavItems";

const BottomNav = ({}) => {
  return (
    <div className="z-1 m-auto flex h-24 w-3/6 items-center justify-center gap-4 rounded-lg bg-red-300">
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
