const wybor = document.querySelectorAll("input[name='wlos']");
const btn = document.querySelector("button");
const wynik = document.querySelector("#wynik");

btn.addEventListener("click", function()
{
    let i = 0;
    while(!wybor[i].checked)
        i++;
    if(i>3)
        wynik.innerHTML = `Nie wybrano opcji!`;
    else if(i===0)
        wynik.innerHTML = `cena strzyżenia: 25zl`;
    else if(i===1)
        wynik.innerHTML = `cena strzyżenia: 30zl`;
    else if(i===2)
        wynik.innerHTML = `cena strzyżenia: 40zl`;
    else if(i===3)
        wynik.innerHTML = `cena strzyżenia: 50zl`;
});