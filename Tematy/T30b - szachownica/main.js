const n_ = document.querySelector("#n");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function()
{
   let n = parseInt(n_.value);
   wynik.innerHTML = ``;

   for(let i=0; i<n; i++)
   {
       if(i%2!==0)
           oddRow(n);
       else
           evenRow(n);
   }
});

function oddRow(n)
{
    for(let j=0; j<n; j++)
    {
        if(j%2!==0)
            wynik.innerHTML += `<div id="black"></div>`;
        else
            wynik.innerHTML += `<div id="white"></div>`;
    }
}

function evenRow(n)
{
    for(let j=0; j<n; j++)
    {
        if(j%2!==0)
            wynik.innerHTML += `<div id="white"></div>`;
        else
            wynik.innerHTML += `<div id="black"></div>`;
    }
}