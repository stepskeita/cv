import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Quote from "./components/Quote";

function App() {
  return (
    <div className="w-full flex items-stretch p-7 ">
      <div className="w-full md:w-fit md:max-w-[300px]">
        <div className="sticky top-0">
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
