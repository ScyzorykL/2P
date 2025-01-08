const n_ = document.querySelector("#n");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
    let n = parseInt(n_.value);

    wynik.innerHTML = ``;

    if(n<0)
    {
        for(let i=0; i>=n; i--)
        {
            wynik.innerHTML += `${2**i}<br>`;
        }
    }
    else
    {
        for(let i=0; i<=n; i++)
        {
            wynik.innerHTML += `2<sup>${i}</sup> = ${2**i}<br>`;
        }
    }
});