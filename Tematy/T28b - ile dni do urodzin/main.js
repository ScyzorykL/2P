const birthday = document.querySelector('#birthday');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let bday = birthday.value;
    let vals = bday.split("/");
    let by = parseInt(vals[0]);
    let bm = parseInt(vals[1]);
    let bd = parseInt(vals[2]);

    let currentDay = new Date;
    let y = currentDay.getFullYear();
    let m = currentDay.getMonth()+1;
    let d = currentDay.getDate();

    let wm;
    let wd;
    if(bd<d)
    {
        wm = bm+m+12;
        wd = bd+d;
    }
    if(bm<m)
    {
        wm = bm+m;
        wd = bd+d+365;
    }
    else
    {
        wm = bm-m;
        wd = bd-d;
    }

    wynik.innerHTML = `do urodzin pozostało miesięcy: ${wm}, dni: ${wd}`;
});
