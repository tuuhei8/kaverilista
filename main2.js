const kaveriLista = []

let lisays = document.getElementById("lisaa");
lisays.addEventListener("click", lisaaKaveri);

let poisto = document.getElementById("poista");
poisto.addEventListener("click", poistaKaveri);

let jarjestys = document.getElementById("jarjesta");
jarjestys.addEventListener("click", jarjestaKaverit);

function lisaaKaveri(event) {
    event.preventDefault();
    let nimi = document.querySelector(".lomake input[type='text']").value;
    if (nimi.length < 1) {
        alert("Anna nimi");
        return;
    } 
    if (kaveriLista.includes(nimi) == true) {
        alert("Nimi on jo listalla");
        return;
    } else {
        kaveriLista.push(nimi);
        kirjoita();
    }
}

function poistaKaveri(event) {
    event.preventDefault();
    let nimi = document.querySelector(".lomake input[type='text']").value;
    if (nimi.length < 1) {
        alert("Anna nimi");
        return;
    }
    if (kaveriLista.includes(nimi) == false) {
        alert("Nimeä ei löydy");
        return;
    } else {
        let kohta = kaveriLista.indexOf(nimi);
        kaveriLista.splice(kohta, 1);
        kirjoita();
    }
}

function jarjestaKaverit(event) {
    event.preventDefault();
    kaveriLista.sort();
    kirjoita();
}

function kirjoita() {
    let pituus = kaveriLista.length;
    let teksti = "<ol>";
    for (let i = 0; i < pituus; i++) {
        teksti += "<li>" + kaveriLista[i] + "</li>";
        }
    teksti += "</ol>";
    document.getElementById("lista").innerHTML = teksti;
}