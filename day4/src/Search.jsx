import { useState } from "react"
import {motion} from "framer-motion"

export const Search=()=>{
    const [isVisible,setIsVisible]=useState(false)
    
    const handleClick=()=>{
        setIsVisible(prev=>!prev)
    }    
    
    return(
        <div
        onClick={handleClick}
        id="search"
        className="flex flex-row gap-2 rounded-full"
      >
        {isVisible && (
          <motion.input
            className="rounded-full p-3"
            placeholder="Search..."
            autoFocus
            initial={{ opacity: 0, x: -10 }} // Proprietà iniziali per l'animazione
            animate={{ opacity: 1, x: 0 }} // Proprietà animate
            transition={{ duration: 0.3 }} // Durata dell'animazione
          />
        )}
        <img
          src="./src/assets/search.png"
          className={isVisible && "translate-x-1"}
          alt=""
        />
      </div>
    );
  };