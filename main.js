const kaveriLista = []

function funktio() {
    for (let i = 0; i < 10; i++) {
        let kaveri = prompt("Anna kaverin nimi:");
            if (kaveri != null) {
            kaveriLista.push(kaveri)
            }
        }
    kaveriLista.forEach(funktio2);
    }

function funktio2(arvo) {
    let uusiKaveri = document.createElement("li")
    let uusiKaveriNimi = document.createTextNode(arvo)
    uusiKaveri.appendChild(uusiKaveriNimi)
    document.querySelector("#lista").appendChild(uusiKaveri)
    }