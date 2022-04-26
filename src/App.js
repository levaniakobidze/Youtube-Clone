import "./App.css";
import Header from "./components/Header/Header";
import LeftBar from "./components/LeftBar/LeftBar";
import VideoContent from "./components/videoContent/VideoContent";

function App() {
  return (
    <div className='App'>
      {/* Header */}
      <Header />
      <div className='main-content'>
        <LeftBar />
        <VideoContent />
      </div>
      {/* SideBar */}
      {/* Videos */}
    </div>
  );
}

export default App;
