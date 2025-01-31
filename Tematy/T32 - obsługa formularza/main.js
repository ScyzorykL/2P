const suwak = document.querySelector("#suwak");
const data = document.querySelector("#data");
const kolor = document.querySelector("#kolor");
const btn = document.querySelector("button");
const wynik = document.querySelector("#wynik");
const h1 = document.querySelector("h1");

btn.addEventListener("click", function()
{
    wynik.innerHTML = `Usługę wykonano: ${data.value}<br><br>
    Ocena klienta: ${suwak.value}<br><br>
    Ocena kolorem: <span style="color: ${kolor.value}">ocena kolorem</span>`;

    h1.style.color = kolor.value;
});