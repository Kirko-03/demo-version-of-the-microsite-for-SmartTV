import { NumberButton } from "../../Buttons/NumberButton/NumberButton";
import nf from "./NumFrame.module.css";

type NumFrame = {
  setArrayNumber: (arrayNumber: Array<string>) => void;
  arrayNumber: Array<string>;
};

export const NumFrame = (props: NumFrame) => {
  let array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "Стереть", "0"];
  console.log(props.arrayNumber);

  return (
    <div className={nf.numFrame}>
      {array.map((el) =>
        el.length > 1 ? (
          <NumberButton
            width={"182px"}
            onClick={() =>
              props.setArrayNumber([
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
              ])
            }
            text={el}
          />
        ) : (
          <NumberButton
            onClick={() =>
              props.setArrayNumber(
                props.arrayNumber.join(" ").replace("_", el).split(" ")
              )
            }
            width={"88px"}
            text={el}
          />
        )
      )}
    </div>
  );
};
