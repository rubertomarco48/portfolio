import { Linea } from "./Linea"

export function Step(props) {   

    return(
        <div className="flex items-center">
            {props.num!==0 && <Linea num={props.num}/>}
            <button id={props.num!==0 ? "button" : "sempre"} className={props.num===0? "fatto" : "nonFatto"}>{props.num}</button>
        </div>
    )
    }