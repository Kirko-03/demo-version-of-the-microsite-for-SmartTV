import a from "./App.module.css"; 
import { Banner } from "./items/Banner/Banner";
import { useState } from "react";
import {Panel} from './items/Panel/Panel'
import qrCode from './images/index.png'

function App() {
  let [panel,setPanel] = useState<boolean>(false)
  return (
    <div className={a.App}>
      {panel&&<button onClick={()=>setPanel(false)} className={a.close}>{<div>X</div>}</button>}
      
      <iframe src="https://www.youtube.com/embed/eChMg8721FA?enablejsapi=1&iv_load_policy=0&controls=0&start=0&disablekb=0"
       width={"1280px"}
       height={"609px"} 
        frameBorder='0'
        allow='autoplay'
        autoCorrect={'1'}
        
        title='video'
        contextMenu={'none'}
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
