const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function(){
    wynik.innerHTML = ``;

    let tab = [];
    for(let i=0; i<3; i++)
        tab[i] = [];
    for(let i=0; i<3; i++)
        for(let j=0; j<3; j++)
            tab[i][j] = Math.floor(Math.random()*10);

    showArray(tab);
    przekatne(tab);
});

function showArray(t)
{
    let ileW = t.length;
    let ileK = t[0].length;
    let w = `<table>`;
    for(let i=0; i<ileW; i++)
    {
        w += `<tr>`;
        for(let j=0; j<ileK; j++)
        {
            w += `<td>${t[i][j]}</td>`;
        }
        w += `</tr>`;
    }
    w += `</table>`;

    wynik.innerHTML = w;
}

function przekatne(t)
{
    let n = t.length;
    let m = t[0].length;

    if(t[0][0]+t[1][1]+t[2][2]>t[2][0]+t[1][1]+t[0][2])
    {
        wynik.innerHTML += `<br>LG_PD > LD_PG`;
    }
    else if(t[0][0]+t[1][1]+t[2][2]<t[2][0]+t[1][1]+t[0][2])
    {
        wynik.innerHTML += `<br>LG_PD < LD_PG`;
    }
    else
    {
        wynik.innerHTML += `<br>LG_PD = LD_PG`;
    }
}