const litery = ['a', 'b', 'c', 'd', 'e'];
const btn = document.querySelector('button');
const wynik = document.querySelector('#wynik');

btn.addEventListener('click', function(){
    wynik.innerHTML = ``;

    let arr = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
    ];

////////////////////////////////////////////////////////////////////////

    for(let i=0; i<7; i++)
    {
        for(let j=0; j<7; j++)
            arr[i][j] = litery[Math.floor(Math.random()*5)];
    }

////////////////////////////////////////////////////////////////////////

    for(let i=0; i<arr.length; i++)
    {
        for(let j=0; j<arr[i].length; j++)
            wynik.innerHTML += `<span>${arr[i][j]}</span>`;
        wynik.innerHTML += `<br><br>`;
    }

////////////////////////////////////////////////////////////////////////

    wynik.innerHTML += `Litera A wystąpiła razy: ${checkAs(arr)}<br>`;
});

function checkAs(arr)
{
    let x = 0;
    for(let i=0; i<arr.length; i++)
    {
        for (let j = 0; j < arr[i].length; j++)
        {
            if(arr[i][j] === 'a')
                x++;
            else
                continue;
        }
    }

    return x;
}

function checkBs(arr)
{

}