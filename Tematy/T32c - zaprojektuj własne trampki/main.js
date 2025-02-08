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
    wynik.innerHTML = `Przesłano formularz!`;

    console.log(`Imię: ${imie.value}`);
    console.log(`E-mail: ${email.value}`);
    console.log(`Telefon: ${tele.value}`);
    console.log(`Opis: ${desc.value}`);

    console.log(`\n\nButy:`);

    for(const input of color1)
        if(input.checked)
            console.log(`Kolor 1: ${input.nextElementSibling.textContent}`);

    console.log(`Kolor 2: ${color2.value}`);
    console.log(`Rozmiar: ${size.value}`);

    console.log(`\nAkcesoria:`);
    for(const input of bonus)
        if(input.checked)
            console.log(`${input.nextElementSibling.textContent}`);
});