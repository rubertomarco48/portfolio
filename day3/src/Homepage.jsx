import { useState } from "react";



export const Homepage = () => {
  /* if(e.target.className==="noRotate"){
        e.target.className = "buttonRotate"
    }else if(e.target.className=== "buttonRotate"){
        e.target.className="noRotate"
    } */
  const [stileBottone,setStileBottone]=useState("noRotate")
  const [stile, setStile] = useState("noRotate");
  const handleRotate = () => {
    switch (stile) {
      case "noRotate":
        setStile("rotate");
        break;
      case "rotate":
        setStile("noRotate");
        break;
    }
    switch(stileBottone){
        case "noRotate":
            setStileBottone("buttonRotate");
            break;
        case "buttonRotate":
            setStileBottone("noRotate")
            break;    
    }
    const nav = document.querySelector("nav")
    if (nav.className==="") {
      nav.className="nav"
    }else{
      nav.className=""
    }
  };
  return (
    <div id="Homepage" className={stile}>
      <div id="content">
        <h1>Amazing Article</h1>
        <small>Florin Pop</small>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          voluptatibus? Provident quidem doloribus dolore delectus omnis
          exercitationem consequuntur, harum nam quasi saepe voluptatem atque at
          in eligendi quam nisi nemo!
        </p>
        <h2><strong>My Dog</strong></h2>
        <img src="./src/assets/image.avif" className="cane" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          voluptatibus? Provident quidem doloribus dolore delectus omnis
          exercitationem consequuntur, harum nam quasi saepe voluptatem atque at
          in eligendi quam nisi nemo!
        </p>
        
      </div>
      <button className={stileBottone} onClick={handleRotate}>
        <img src="./src/assets/menu.svg" id="menu" alt="" />
        <img src="./src/assets/close.svg" id="close"/>
      </button>
      
    </div>
  );
};
