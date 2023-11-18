export const Div=(props)=>{

return(
    <div className={props.none ? "m-10 visibleEver flex w-1/3 bg-red-600 rounded-xl  border-blue-400 border-2 justify-center items-center":`m-10 flex w-1/3 bg-red-600 rounded-xl  border-blue-400 border-2 justify-center items-center ${props.verso}`} id={props.id}>
        <h2>CONTENT</h2>
    </div>
)
}