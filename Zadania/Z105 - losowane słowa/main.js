const znaki_ = document.querySelector("#znaki");
const dlugosc_ = document.querySelector("#dlugsc");
const ile_ = document.querySelector("#ile");
const btn = document.querySelector("button");
const wynik1 = document.querySelector("#wynik1");
const wynik2 = document.querySelector("#wynik2");

btn.addEventListener("click", function()
{
   const arr = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
   let znaki = znaki_.value;
   let dlugosc = parseInt(dlugosc_.value);
   let ile = parseInt(ile_.value);

   wynik1.innerHTML = ``;
   wynik2.innerHTML = ``;

   for(let i=0; i<10; i++)
       arr[i] = znaki[i];

   ////////////////////////////////////////////////////////////////////////

   for(let i=0; i<znaki.length-1; i++)
   {
       wynik1.innerHTML += `[ ${znaki[i]} ] `;
   }

   for(let i=0; i<ile; i++)
   {
       for(let j=0; j<dlugosc; j++)
       {
           wynik2.innerHTML += arr[Math.floor(Math.random()*10)];
       }
       wynik2.innerHTML += `<br>`;
   }
});