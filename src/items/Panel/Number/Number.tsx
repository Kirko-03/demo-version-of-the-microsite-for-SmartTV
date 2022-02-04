import n from './Number.module.css'

type NumberType={
    error:boolean
    arrayNumber:Array<string>
}

export const Number = (props:NumberType) =>{
    return <div className={props.error&&props.arrayNumber.find(str=>str==='_')=='_'?n.errorTN:n.telNumber}>
        {props.arrayNumber.join(' ')}
    </div>
}