let knapp = document.getElementById("knapp");
let input = document.getElementById("brukerinput");
let ul = document.querySelector("ul");
let liListe = document.getElementsByTagName("li");

//funskjon lager knapp
function leggTilKnapp() {
  let btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Trykk2"));
  liListe[i].appendChild(btn);
}
//legger til knapp på hvert element
var liLengde = liListe.length;
for (var i = 0; i < liLengde; i++) {
  leggTilKnapp();
}

//kjøres av de andre funksjonene
function lagListeElement() {
  //lag li-element
  let li = document.createElement("li");
  //fester text-brukerinputen til elementet som ble laget
  li.appendChild(document.createTextNode(input.value));
  //legg til elementet vi har laget i forelder-element
  ul.appendChild(li);
  //lag knapp
  let btn = document.createElement("button");
  //lag tekst til knapp
  btn.appendChild(document.createTextNode("Trykk2"));
  //fest knapp på slutten av li
  li.appendChild(btn);
  //fjern tekst fra inputfelt
  input.value = "";
}

//kjøres dersom event på knapp skjer
function leggTilListeKnapp() {
  //sjekker om inputfelt ikke er tomt
  if (input.value.length > 0) {
    lagListeElement();
  }
}
//kjøres dersom tastetrykk skjer, eventet brukes som parameter
function leggTilListeTast(event) {
  //hvis event-kode er Enter og inputfelt ikke er tomt
  if (event.code === "Enter" && input.value.length) {
    lagListeElement();
  }
}

//venter på klikk-event, kjører leggTilListeKnapp hvis det skjer
knapp.addEventListener("click", leggTilListeKnapp);
//venter på keypress-event, kjører leggTilListeTast hvis det skjer
input.addEventListener("keypress", leggTilListeTast);
