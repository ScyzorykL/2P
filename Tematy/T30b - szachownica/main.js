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
            wynik.innerHTML += `<span class="black"></span>`;
        else
            wynik.innerHTML += `<span class="white"></span>`;
    }
    wynik.innerHTML += `<br>`;
}

function evenRow(n)
{
    for(let j=0; j<n; j++)
    {
        if(j%2!==0)
            wynik.innerHTML += `<span class="white"></span>`;
        else
            wynik.innerHTML += `<span class="black"></span>`;
    }
    wynik.innerHTML += `<br>`;
}