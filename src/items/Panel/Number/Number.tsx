import n from './Number.module.css'

type NumberType={
    arrayNumber:Array<string>
}

export const Number = (props:NumberType) =>{
    return <div className={n.telNumber}>
        {props.arrayNumber.join(' ')}
    </div>
}