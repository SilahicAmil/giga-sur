import BottomNav from "../components/Navigation/BottomNav/BottomNav";
import DesktopItem from "../components/Desktop/DesktopItem";
import TopNav from "../components/Navigation/TopNav/TopNav";

function App() {
  return (
    <>
      <TopNav />
      <div className="h-full w-[100vw]  text-white">
        <div className="ml-auto flex h-5/6 w-full text-xl ">
          <DesktopItem />
        </div>
        <BottomNav />
      </div>
    </>
  );
}

export default App;
