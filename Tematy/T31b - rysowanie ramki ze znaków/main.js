const a_ = document.querySelector("#a");
const b_ = document.querySelector("#b");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let a = parseInt(a_.value);
    let b = parseInt(b_.value);
    wynik.innerHTML = ``;

    for(let i=1; i<=a; i++)
    {
        for(let j=1; j<=b; j++)
        {
            if(i===1 || i===a)
            {
                wynik.innerHTML += `/`;
            }
            else
            {
                if(j===1 || j===b)
                    wynik.innerHTML += `/`;
                else
                    wynik.innerHTML += ` `;
            }
        }
        wynik.innerHTML += `<br>`;
    }
});