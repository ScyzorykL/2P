const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    wynik.innerHTML = ``;

   let date = new Date;
   let d = date.getDate();
   let m = date.getMonth()+1;
   let y = date.getFullYear();

   wynik.innerHTML += `Format domyślny: ${basicDate(d, m, y)}<br>`;
   wynik.innerHTML += `Format rzymski: ${romanDate(d, m, y)}<br>`;
   wynik.innerHTML += `Format polski: ${polishDate(d, m, y)}<br>`;
});

function basicDate(d, m, y)
{
    return `${d}.${m}.${y}`;
}

function romanDate(d, m, y)
{
    switch(m)
    {
        case 1:
             m = `I`;
            break;
        case 2:
            m = `II`;
            break;
        case 3:
            m = `III`;
            break;
        case 4:
            m = `IV`;
            break;
        case 5:
            m = `V`;
            break;
        case 6:
            m = `VI`;
            break;
        case 7:
            m = `VII`;
            break;
        case 8:
            m = `VIII`;
            break;
        case 9:
            m = `IX`;
            break;
        case 10:
            m = `X`;
            break;
        case 11:
            m = `XI`;
            break;
        case 12:
            m = `XII`;
            break;
        default:
            m = null;
            break;
    }
    return `${d}.${m}.${y}`;
}

function polishDate(d, m, y)
{
    switch(m)
    {
        case 1:
            m = `Styczeń`;
            break;
        case 2:
            m = `Luty`;
            break;
        case 3:
            m = `Marzec`;
            break;
        case 4:
            m = `Kwiecień`;
            break;
        case 5:
            m = `Maj`;
            break;
        case 6:
            m = `Czerwiec`;
            break;
        case 7:
            m = `Lipiec`;
            break;
        case 8:
            m = `Sierpień`;
            break;
        case 9:
            m = `Wrzesień`;
            break;
        case 10:
            m = `Październik`;
            break;
        case 11:
            m = `Listopad`;
            break;
        case 12:
            m = `Grudzień`;
            break;
        default:
            m = null;
            break;
    }
    return `${d} ${m} ${y}`;
}