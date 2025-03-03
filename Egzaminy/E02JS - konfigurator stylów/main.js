let Tabela1 = [document.querySelector('#indigo'), document.querySelector('#steelblue'), document.querySelector('#olive'), document.querySelector('#font-color'), document.querySelector('#font-size'), document.querySelector('#border'), document.querySelectorAll('[name="list-style"]')];
const display = document.querySelector("#blok_prawy");

Tabela1[0].addEventListener("click", function()
{
    display.style.backgroundColor = `indigo`;
});
Tabela1[1].addEventListener("click", function()
{
    display.style.backgroundColor = `steelblue`;
});
Tabela1[2].addEventListener("click", function()
{
    display.style.backgroundColor = `olive`;
});

Tabela1[3].addEventListener("change", function(e)
{
    display.style.color = e.target.value;
});

// Tabela1[4].addEventListener("input", function()
// {
//    display.style.fontsize = (Tabela1[4].value)`%`;
// });

Tabela1[5].addEventListener("input", function()
{
    if(Tabela1[5].checked)
        document.querySelector('img').style.border = `white solid 1px`;
    else
        document.querySelector('img').style.border = `none`;
});

Tabela1[6].addEventListener("checked", function()
{
    Tabela1[6].forEach(inp => {
        if(inp)
    });
});