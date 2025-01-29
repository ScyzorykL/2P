const div = document.querySelector("#div");
let i=0;
let data = new Date;
let d = data.getDate();
let m = data.getMonth()+1;
let y = data.getFullYear();

div.addEventListener("mouseover", function(){
   if(i===0)
   {
       div.innerHTML = `${d}.${m}.${y}`;
       i++;
   }
   else
   {
       div.innerHTML = `Data już była!`;
   }
});
div.addEventListener("mouseout", function(){
   div.innerHTML = ``;
});