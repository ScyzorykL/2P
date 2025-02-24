const wynik = document.querySelector("#wynik");

function sprawdz(form)
{
    if(form.nazwa.value === '')
    {
        alert('Pole Nazwa użytkownika musi być wypełnione');
        form.imie.focus();
    }
    else if(form.email.value === '')
    {
        alert('Pole Email musi być wypełnione');
        form.zawod.focus();
    }
    let emailspr = email.value.split('@');
    if(emailspr[1]!==`zspglogow.pl`)
    {
        alert('Użyj prawidłowej domeny email');
        form.email.focus();
    }
    else if(form.haslo1.value<8 || form.haslo2.value<8)
    {
        alert('Błędne hasło');
        form.haslo1.focus();
        form.haslo2.focus();
    }
    else
    {
        wynik.innerHTML =
            `
            Nazwa użytkownika: ${form.nazwa.value}<br>;
            Email: ${form.email.value}<br>;
            Hasło1: ${form.haslo1.value}<br>;
            Hasło2: ${form.haslo2.value}<br>;
            `;
        console.log(`${form.nazwa.value}`);
        console.log(`${form.email.value}`);
        console.log(`${form.haslo1.value}`);
        console.log(`${form.haslo2.value}`);
    }
}