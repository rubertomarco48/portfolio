export function transition(){
const left = document.querySelector(".left");
const right = document.querySelector(".right");
console.log(`left:${left}`);
console.log(`right:${right}`);


left.addEventListener('mouseenter', () => left.classList.add('hover-left'))
left.addEventListener('mouseleave', () => left.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => right.classList.add('hover-right'))
right.addEventListener('mouseleave', () => right.classList.remove('hover-right'))
}