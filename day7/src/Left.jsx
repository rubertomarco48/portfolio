export const Left = () => {
  return (
    <div
      className="h-full w-1/2 left flex justify-center items-center"
      onMouseEnter={() => {
        const left = document.querySelector(".left");
        const right = document.querySelector(".right");
        left.addEventListener("mouseenter", () =>
          left.classList.add("hover-left")
        );
        left.addEventListener("mouseleave", () =>
          left.classList.remove("hover-left")
        );

        right.addEventListener("mouseenter", () =>
          right.classList.add("hover-right")
        );
        right.addEventListener("mouseleave", () =>
          right.classList.remove("hover-right")
        );
      }}
    >
      <div className="container1">
        <h1 className=" text-6xl text-white opacity-100">PlayStation</h1>
        <button>Buy Now</button>
      </div>
    </div>
  );
};
