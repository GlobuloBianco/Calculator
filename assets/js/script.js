const display = document.getElementById('display');

// Input dei numeri e operandi
scrivi = (lettera, numero) => {
        document.getElementById(lettera).onclick = function() {
        display.value += numero;
    }
}

display.innerHTML = scrivi('zero', '0');
display.innerHTML = scrivi('uno', '1');
display.innerHTML = scrivi('due', '2');
display.innerHTML = scrivi('tre', '3');
display.innerHTML = scrivi('quattro', '4');
display.innerHTML = scrivi('cinque', '5');
display.innerHTML = scrivi('sei', '6');
display.innerHTML = scrivi('sette', '7');
display.innerHTML = scrivi('otto', '8');
display.innerHTML = scrivi('nove', '9');
display.innerHTML = scrivi('punto', '.');
display.innerHTML = scrivi('piu', '+');
display.innerHTML = scrivi('meno', '-');
display.innerHTML = scrivi('per', '*');
display.innerHTML = scrivi('diviso', '/');
 
// All Clear + animazione
document.getElementById('ac').onclick = function() {
    window.location.reload();
}

// Somma + decimali arrotondati
document.getElementById('uguale').onclick = function() {
    let risultato = Math.round(eval(display.value) * 100) / 100;
    display.value = ''; // per togliere l'operazione prima di mettere il risultato
    display.value += risultato;
}

// Delete
document.getElementById('del').onclick = function() {
    display.value = display.value.slice(0, -1);;
}

// Btn Accensione
document.getElementById('accensione').onclick = function() {
    document.getElementById('accensione').innerHTML = '&#9898;'
    display.value = ''; //nel caso qualcuno scrive prima di accendere
    display.style.color = 'white';
    display.classList.add('acceso');
    
}