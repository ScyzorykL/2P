const n_ = document.querySelector("#n");
const btn = document.querySelector("button");
const wynik = document.querySelector("#wynik");

btn.addEventListener("click", function(){
    let n = parseInt(n_.value);
    wynik.innerHTML = ``;

    if(n<=0)
        wynik.innerHTML = `0`;
    else
        for(let i=1; i<=n; i++)
        {
            wynik.innerHTML += `F(${i}) = ${fib(i)}<br>`;
        }
});

function fib(n)
{
    if(n===1 || n===2) return 1;
    else return fib(n-1)+fib(n-2);
}