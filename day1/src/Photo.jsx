export function Photo(props){
   return(
    <div id={props.numero} className={props.stile} onClick={(e)=>props.func(e)} >
        <img src={props.src} id={props.numero} className="rounded-xl h-5/6 object-cover"/>
    </div>
   )
}