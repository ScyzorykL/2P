const c_ = document.querySelector("#c");
const w_ = document.querySelector("#w");
const btn = document.querySelector("button");
const wynik = document.querySelector("#wynik");

btn.addEventListener("click", function()
{
    wynik.innerHTML = ``;
   let c = c_.value;
   let w = parseInt(w_.value);

        for(let i=0; i<w; i++)
        {
            for(let j = 0; j < i; j++)
                wynik.innerHTML += c;
            wynik.innerHTML += `<br>`;
        }

        for(let i=w-1; i>0; i--)
        {
            for(let j=0; j<i; j++)
                wynik.innerHTML += c;
            wynik.innerHTML += `<br>`;
        }
});