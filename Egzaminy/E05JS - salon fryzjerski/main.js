const wlosy = document.querySelectorAll("input[name='wlosy']");
const wynik = document.querySelector("#wynik");

function wykonaj()
{
    let w;
    for(el in wlosy)
    {
        if(el.checked)
        {
            if(el.value === "Krótkie")
                w = 25;
            else if(el.value === "Średnie")
                w = 30;
            else if(el.value === "Półdługie")
                w = 40;
            else if(el.value === "Długie")
                w = 50;
        }

        wynik.innerHTML = `Cena strzyżenia: ${w}`;
    }
}