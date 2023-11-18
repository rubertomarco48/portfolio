import { Div } from "./Div"
import { Titolo } from "./Titolo"

function App() {
const boxes = document.querySelectorAll('#box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
           
        } else {
            box.classList.remove('show')
           

        }
    })
}
  return (
    <div className="flex flex-col items-center" id="main">
      <Titolo/>
      <Div none={true}/>
      <Div none={true}/>      
      <Div id="box" verso="boxesDx"/>
      <Div id="box" verso="boxesSx"/>
      <Div id="box" verso="boxesDx"/>
      <Div id="box" verso="boxesSx"/>
      <Div id="box" verso="boxesDx"/>
      <Div id="box" verso="boxesSx"/>      
      <Div id="box" verso="boxesDx"/>
      <Div id="box" verso="boxesSx"/>      
      <Div id="box" verso="boxesDx"/>
      <Div id="box" verso="boxesSx"/>      
      <Div id="box" verso="boxesDx"/>
      <Div id="box" verso="boxesSx"/>      
      <Div id="box" verso="boxesDx"/>  
    </div>
  )
}

export default App
