import { useState } from "react"
import { Step } from "./Step"

function App() {
const [dis1,setDis1]=useState("bottoneDisabilitato")
const [dis2,setDis2]=useState("bottoni")
const [counter,setCounter]=useState(0)  

const handleNext = async()=>{
  const bottone = document.querySelectorAll("#button")
  const linee = document.querySelectorAll("#linee") 
  if(counter>=0 && counter<3){
    bottone[counter].className="fatto"
    linee[counter].className="lineaAzzurra"
     setCounter(prev=>prev+1)
    setDis1("bottoni")
  }
  setTimeout(()=>console.log(counter),200)

}
const handlePrev = ()=>{ 
  const bottone = document.querySelectorAll("#button")
  const linee = document.querySelectorAll("#linee") 
  if(counter>=1 && counter<4){
    setCounter(prev=>prev-1)
    bottone[counter-1].className="nonFatto"
    linee[counter-1].className="lineaGrigia"
    setDis2("bottoni")
  } 
  setTimeout(()=>console.log(counter),200)
}
  return (
    <div className="w-full h-screen flex flex-col justify-center gap-5 items-center">
      <div className="w-1/3 flex justify-center">
      <Step num={0} />
      <Step num={1} />
      <Step num={2} />
      <Step num={3} />
      </div>
      <div className="flex gap-10">
      <button className={counter===0?"bottoneDisabilitato":dis1} onClick={handlePrev}>Prev</button>
      <button className={counter===3?"bottoneDisabilitato":dis2} onClick={handleNext}>Next</button>
      </div>      
    </div>
  )
}

export default App
