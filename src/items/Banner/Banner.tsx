import b from "./Banner.module.css";
import QR from "./../../images/index.png";
import React from "react";
import { MyButton } from "../Buttons/MyButton";

export const Banner = () => {
  return (
    <div className={b.banner}>
      ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!
      <img src={QR} alt="QR code" />
      Сканируйте QR-код или нажмите ОК
      <MyButton width={'156px'} text={'OK'}/>
    </div>
  );
};
