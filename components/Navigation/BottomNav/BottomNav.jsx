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
      {/* Github goes to my github */}
      <BottomNavItems>
        <a href="https://github.com/silahicamil">Github</a>
      </BottomNavItems>
      {/* this will pop up a modal to email me. will make it look similiar to mac os mail */}
      <BottomNavItems>
        <button>Email</button>
      </BottomNavItems>
      <BottomNavItems></BottomNavItems>
    </div>
  );
};

export default BottomNav;
