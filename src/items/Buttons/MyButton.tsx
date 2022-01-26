type MyButtonType = {
    text:string
    width:string
}

export const MyButton =(props:MyButtonType)=>{
    const style = {height:'52px',width:props.width,background:'black',color:'#86d3f4'}
    return <button style={style}>{props.text}</button>
}