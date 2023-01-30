import BottomNav from "../components/Navigation/BottomNav/BottomNav";
import TopNav from "../components/Navigation/TopNav/TopNav";

function App() {
  return (
    <>
      <TopNav />
      <div className="bg-red-500 w-[100vw] h-full ">
        <h1 className="text-sm h-5/6 ">Hello World</h1>
        <BottomNav />
      </div>
    </>
  );
}

export default App;
