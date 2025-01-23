const birthday = document.querySelector('#birthday');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let bDay = new Date;
    let currentDate = new Date;
    bDay = birthday.value;

    let bd = bDay.getDate();
    let bm = bDay.getMonth()+1;

    let d = currentDate.getDate();
    let m = currentDate.getMonth()+1;
});

function calculate(bd, bm, d, m)
{

}