import n from './NumberButton.module.css'

type NumberButtonType = {
    text: string;
    width:string
    onClick:any
  };

export const NumberButton = (props: NumberButtonType) => {
     return (
      <button style={{width:props.width}} onClick={()=>props.onClick()} className={n.numberButton}>
        {props.text}
      </button>
    );
  };
  