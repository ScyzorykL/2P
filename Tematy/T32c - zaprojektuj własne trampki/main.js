const submit = document.querySelector("input[type='submit']");
const reset = document.querySelector("input[type='reset']");
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
reset.addEventListener("click", function()
{
   rangeVal.innerHTML = `1`;
});