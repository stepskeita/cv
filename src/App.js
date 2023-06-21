import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Quote from "./components/Quote";

function App() {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:items-stretch lg:p-7 xl:px-20 ">
      <div className="w-full lg:w-fit lg:max-w-[300px]">
        <div className="sticky top-5">
          <Profile />
          <Quote />
        </div>
      </div>
      <div className="flex-1">
        <Projects />
      </div>
    </div>
  );
}

export default App;
