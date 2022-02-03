import b from "./Banner.module.css";
import QR from "./../../images/index.png";
import React from "react";
import { BannerButton } from "../Buttons/BannerButton/BannerButton";
type BannerType = {
  setPanel: (panel: boolean) => void;
};

export const Banner = (props: BannerType) => {
  return (
    <div>
      <p className={b.preQR}>
        ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!
      </p>
      <img className={b.QR} src={QR} alt="QR code" />
      <p className={b.postQR}>Сканируйте QR-код или нажмите ОК</p>
      <BannerButton text={"OK"} setPanel={props.setPanel} />
    </div>
  );
};
