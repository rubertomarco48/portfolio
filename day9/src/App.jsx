import { Audio } from "./Audio"
function App() {
  return (
    <div className="flex justify-center gap-1 items-center flex-wrap m-auto">
      <Audio src="./src/audio/applausi.mp3" name="Applausi"/>
      <Audio src="./src/audio/boo.mp3" name="Boo"/>
      <Audio src="./src/audio/gasp.mp3" name="Gasp"/>
      <Audio src="./src/audio/sbagliato.mp3" name="Lose"/>
      <Audio src="./src/audio/successo.mp3" name="Win"/>
      <Audio src="./src/audio/thunder.mp3" name="Thunder"/>
      <Audio src="./src/audio/tada.mp3" name="Tada"/>
    </div>
  )
}

export default App
