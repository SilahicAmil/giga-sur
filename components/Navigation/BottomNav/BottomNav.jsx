import BottomNavItems from "./BottomNavItems";

const BottomNav = ({}) => {
  return (
    <div className="z-1 m-auto flex h-24 w-3/6 items-center justify-center gap-4 rounded-lg bg-red-300">
      <BottomNavItems>
        <p>Finder</p>
      </BottomNavItems>
      {/* safari takes you to my portfolio */}
      <BottomNavItems>
        <a href="https://amil.dev" target="_blank">
          Safari
        </a>
      </BottomNavItems>
    </div>
  );
};

export default BottomNav;
