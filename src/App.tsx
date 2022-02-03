import a from "./App.module.css"; //css модуль для стилизации App.tsx
import ReactPlayer from "react-player"; //библиотека для взаимствования плеера с видео
import { Banner } from "./items/Banner/Banner";//самодельный модуль баннера
import { useState } from "react";
import {Panel} from './items/Panel/Panel'
import qrCode from './images/index.png'

function App() {
  let [panel,setPanel] = useState<boolean>(false)
  return (
    <div className={a.App}>
      {panel&&<button onClick={()=>setPanel(false)} className={a.close}>{<div>X</div>}</button>}
      <ReactPlayer
        width={"1280px"}
        height={"609px"} 
        controls
        className={"App"}
        url={"https://youtu.be/M7FIvfx5J10"}
      />                                            
      {!panel?<div className={a.Banner}>
        <Banner setPanel={setPanel} />
      </div>:<Panel  />}
      {panel&&<div className={a.promo}>
      <p>Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
      <img src={qrCode}/>
      </div>}
    </div>
  );
}

export default App;
