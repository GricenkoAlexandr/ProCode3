console.log(1111);
let htitle=document.querySelector('h1');
console.log(htitle);
htitle.style.color="green";
htitle.style.fontSize="52px";
let out=document.querySelector('.out');
out.innerHTML=33333;

let inp1=document.querySelector('input[name="inpel"]');
console.log(inp1);

inp1.addEventListener('change', (ev)=> {
  const text=ev.target.value;
  console.log(text);
})