const l_a = document.querySelector("#a");
const l_b = document.querySelector("#b");
const ile = document.querySelector("#i");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function (){
    let a = parseFloat(l_a.value);
    let b = parseFloat(l_b.value);
    let il =parseInt(ile.value);

    if(b !== 0)
    {
        let iloraz = a / b;

        wynik.innerHTML = `${a} / ${b} = ${iloraz.toFixed(il)}`;
    }
    else
    {
        wynik.innerHTML = `Nie można dzielić przez 0!`;
    }
});