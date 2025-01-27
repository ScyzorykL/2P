const image = document.querySelector("img");
const color = document.querySelector("#col");
const thickness = document.querySelector("#thicc");
const btn = document.querySelector("button");

btn.addEventListener("click", function()
{
    image.style.border = `${thickness.value}px solid ${color.value}`;
});