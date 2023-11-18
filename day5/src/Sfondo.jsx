import { useEffect, useState } from "react";

export const Sfondo = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval); // Ferma l'intervallo quando il caricamento è completo
          console.log("Caricamento completato!");
          return prev;
        }
      });
    }, 40); // Intervallo di 100 millisecondi per incrementare il contatore
  }, []); // L'effetto viene eseguito solo una volta all'inizio

  return (
    <div>
      <div className="contenitore">
        <h1>Caricamento in corso...</h1>
        <h1>{counter}%</h1>
      </div>
      
      <img src="./src/assets/sfondo.jpg" className="immagine" style={{filter:`blur(${100 - counter}px)`}} alt="" />
    </div>
  );
};