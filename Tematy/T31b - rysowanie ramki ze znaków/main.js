const a_ = document.querySelector("#a");
const b_ = document.querySelector("#b");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let a = parseInt(a_.value);
    let b = parseInt(b_.value);
    wynik.innerHTML = ``;

    for(let i=0; i<a; i++)
    {
        for(let j=0; j<b; j++)
        {
            if(i===0 || i===a-1)
                wynik.innerHTML += `|`;
            else
            {
                if(j===0 || j===b-1)
                    wynik.innerHTML += `|`;
                else
                    wynik.innerHTML += `\u00A0`;
            }
        }
        wynik.innerHTML += `<br>`;
    }
});