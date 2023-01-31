import BottomNav from "../components/Navigation/BottomNav/BottomNav";
import DesktopItem from "../components/Desktop/DesktopItem";
import TopNav from "../components/Navigation/TopNav/TopNav";

function App() {
  return (
    <>
      <TopNav />
      <div className="bg-red-500 w-[100vw] h-full ">
        <div className="text-xl ml-auto flex w-full h-5/6 ">
          <DesktopItem />
        </div>
        <BottomNav />
      </div>
    </>
  );
}

export default App;
