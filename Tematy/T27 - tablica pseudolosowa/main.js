const ile = document.querySelector("#x");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function(){
    wynik.innerHTML = ``;
    let x = parseInt(ile.value);
    let t = [];

    for(let i=0; i<x; i++)
        t[i] = Math.random();

    for(let i=0; i<x; i++)
        wynik.innerHTML += `t[${i}] = ${t[i]}<br>`;

    let max = Math.max(...t);
    wynik.innerHTML += `Wartość maksymalna: ${max}`;
});