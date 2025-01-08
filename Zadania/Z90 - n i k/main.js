const n_ = document.querySelector("#n");
const k_ = document.querySelector("#k");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
   let n = parseInt(n_.value);
   let k = parseInt(k_.value);

   wynik.innerHTML = ``;

   if(n<=0 || k<=0)
   {
       wynik.innerHTML = `Błędne dane`;
   }
   else
   {
       for(let i=1; i<=n; i++)
       {
           if(i%k!==0)
           {
               continue;
           }
            else
           {
               wynik.innerHTML += `${i}<br>`;
           }
       }
   }
});