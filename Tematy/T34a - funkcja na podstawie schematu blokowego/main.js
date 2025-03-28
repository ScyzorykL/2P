const a_ = document.querySelector("#a");
const b_ = document.querySelector("#b");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function()
{
   let a = parseInt(a_.value);
   let b = parseInt(b_.value);

   wynik.innerHTML = `Największy wspólny dzielnik: ${oblicz(a, b)}`;
});

//////////////////////////////////////////////////////////////////////////////

function oblicz(a, b)
{
    while(a!==b)
    {
        if(a>b)
            a -= b;
        else
            b -= a;
    }

    return a;
}