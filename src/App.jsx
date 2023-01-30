import BottomNav from "../components/Navigation/BottomNav/BottomNav";
import TopNav from "../components/Navigation/TopNav/TopNav";

function App() {
  return (
    <>
      <TopNav />
      <div className="bg-red-500 w-[100vw] h-full ">
        <div className="text-xl ml-auto flex w-full h-5/6 ">
          <h1 className="flex ml-auto">Hello World</h1>
        </div>
        <BottomNav />
      </div>
    </>
  );
}

export default App;
