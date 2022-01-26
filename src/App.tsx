import a from "./App.module.css"; //css модуль для стилизации App.tsx
import ReactPlayer from "react-player"; //библиотека для взаимствования плеера с видео
import { Banner } from "./items/Banner/Banner";//самодельный модуль баннера

function App() {
  return (
    <div className={a.App}>
      <ReactPlayer
        width={"1280px"}
        height={"720px"} 
        className={"App"}
        url={"https://youtu.be/M7FIvfx5J10"}
      />
      <div className={a.Banner}>
        <Banner />
      </div>
    </div>
  );
}

export default App;
