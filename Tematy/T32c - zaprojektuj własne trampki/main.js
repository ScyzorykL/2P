const submit = document.querySelector("#submit");
const wynik = document.querySelector("#wynik");
const rangeVal = document.querySelector("#rangeVal");

const imie = document.querySelector("#imie");
const email = document.querySelector("#email");
const tele = document.querySelector("#tele");
const desc = document.querySelector("#desc");

const color1 = document.querySelectorAll("input[name='color1']");
const color2 = document.querySelector("#color2");
const size = document.querySelector("#size");
const bonus = document.querySelectorAll("input[name='bonus']");

//funkcjonalność inputu typu "range"

size.addEventListener("input", function()
{
    rangeVal.innerHTML = size.value;
});

//wynik

submit.addEventListener("click", function()
{
    wynik.innerHTML = `Przesłano formularz!<br><br>`;

    wynik.innerHTML += `Imię: ${imie.value}<br>`;
    wynik.innerHTML += `E-mail: ${email.value}<br>`;
    wynik.innerHTML += `Telefon: ${tele.value}<br>`;
    wynik.innerHTML += `Opis: ${desc.value}<br><br>`;

    wynik.innerHTML += `Buty:<br>`;

    for(const input of color1)
        if(input.checked)
            wynik.innerHTML += `Kolor 1: ${input.nextElementSibling.textContent}<br>`;

    wynik.innerHTML += `Kolor 2: ${color2.value}<br>`;
    wynik.innerHTML += `Rozmiar: ${size.value}<br><br>`;

    wynik.innerHTML += `Akcesoria:<br>`;
    for(const input of bonus)
        if(input.checked)
            wynik.innerHTML += `${input.nextElementSibling.textContent}<br>`;
});