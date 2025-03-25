const wynik = document.querySelector("#wynik");
const imie_ = document.querySelector("#imie");
const nazwisko_ = document.querySelector("#nazwisko");
const email_ = document.querySelector("#email");
const usluga_ = document.querySelector("#usluga");

function aktywacja()
{
    event.preventDefault()
    wynik.innerHTML = ``;

    let imie = imie_.value;
    let nazwisko = nazwisko_.value;
    let email = email_.value.toLowerCase();
    let usluga = usluga_.value;

    wynik.innerHTML += imie + ` ` + nazwisko + `<br>`;
    wynik.innerHTML += email + `<br>`;
    wynik.innerHTML += `Usługa: ${usluga}`;

    
}