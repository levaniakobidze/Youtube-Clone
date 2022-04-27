import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import LeftBar from "./components/LeftBar/LeftBar";
import VideoContent from "./components/videoContent/VideoContent";

function App() {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <div className='App'>
      <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className='main-content'>
        <LeftBar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <VideoContent activeMenu={activeMenu} />
      </div>
    </div>
  );
}

export default App;
