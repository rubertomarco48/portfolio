export const Right=()=>{
    return(
        <div className="h-full w-1/2 right flex justify-center items-center" onMouseEnter={() => {
            const left = document.querySelector(".left");
            const right = document.querySelector(".right");
            left.addEventListener("mouseenter", () =>{
                left.classList.add("hover-left")
                left.classList.remove("unhover")
            }
            );
            right.addEventListener("mouseleave",()=>{
              right.classList.add("unhover")
              right.classList.remove("hover-right")
            }
            )
            right.addEventListener("mouseenter", () =>{
              right.classList.add("hover-right")
              right.classList.remove("unhover")
            }
            );
            left.addEventListener("mouseleave",()=>{
              left.classList.add("unhover")
              left.classList.remove("hover.left")
            }
            )

          }}>
            <div className="container2">
           <h1 className=" text-6xl text-white opacity-100">X-Box</h1>
                <button>Buy Now</button>
            </div> 
        </div>
    )
}