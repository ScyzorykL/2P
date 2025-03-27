const cena_ = document.querySelector("#cena");
const typ_ = document.querySelector("#typ");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function()
{
   let c = parseInt(cena_.value);
   let t = typ_.value;
   let p;

   if(isNaN(c)||t==="")
       alert("Podaj właściwe dane");
   else if(c<200)
       wynik.innerHTML = `cena: ${c}, typ: ${t}, podatek: 0`;
   else
   {
       if(c<=1000)
       {
           if(t==="d")
           {
                p = c*(0.15-0.05);
               wynik.innerHTML = `cena: ${c}, typ: ${t}, podatek: ${p.toFixed(2)}`;
           }
           else
           {
               p = c*0.15;
               wynik.innerHTML = `cena: ${c}, typ: ${t}, podatek: ${p.toFixed(2)}`;
           }
       }
       else
       {
           if(t==="d")
           {
               p = c*(0.22-0.05);
               wynik.innerHTML = `cena: ${c}, typ: ${t}, podatek: ${p.toFixed(2)}`;
           }
           else
           {
               p = c*0.22;
               wynik.innerHTML = `cena: ${c}, typ: ${t}, podatek: ${p.toFixed(2)}`;
           }
       }
   }
});