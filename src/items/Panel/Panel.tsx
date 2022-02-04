import p from "./Panel.module.css";
import { Number } from "./Number/Number";
import { NumFrame } from "./NumFrame/NumFrame";
import { useState } from "react";

export const Panel = () => {
  let [arrayNumber, setArrayNumber] = useState<Array<string>>([
    "+",
    "7",
    "(",
    "_",
    "_",
    "_",
    ")",
    "_",
    "_",
    "_",
    "-",
    "_",
    "_",
    "-",
    "_",
    "_",
  ]);
  const [error,setError] = useState<boolean>(false)
  const [consent, setConsent] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  function validationNumber(){
    arrayNumber.find(str=>str==='_')!=='_'?setSuccess(true):setError(true)
    
  }
  return (
    <div className={p.Panel}>
      {success ? (
        <div className={p.final}>
          <h1>ЗАЯВКА ПРИНЯТА</h1>
          <p>Держите телефон под рукой.Скоро с Вами свяжется наш менеджер. </p>
        </div>
      ) : (
        <>
          <span className={p.header}>
            Введите ваш номер мобильного телефона
          </span>
          <Number error={error} arrayNumber={arrayNumber}/>
          <span className={p.subText}>
            и с Вами свяжется наш менеждер для дальнейшей консультации
          </span>
          <NumFrame arrayNumber={arrayNumber} setArrayNumber={setArrayNumber} />
          <div className={p.frame}>
            {consent ? (
              <div onClick={() => setConsent(false)} className={p.square}>
                ✔
              </div>
            ) : (
              <div onClick={() => setConsent(true)} className={error?p.emptySquare:p.square} />
            )}
            <p className={p.consentText}>
              Согласие на обработку {<br />}персональных данных
            </p>
          </div>
          <button onClick={() => validationNumber()} className={p.verification}>
            Подтвердить номер
          </button>
        </>
      )}
    </div>
  );
};
