window.console.log("ho fatto il c***o di caffè!!");
document.write("Ho fatto il caffè");
var Tazzina = 0;
let Nuovatazzina = 0; // modo piú comune per inizializza una variabile: let= sia una variabile compresa fra.....
const Chicco = 0; //da inizializzare poichè costante.
let lattuga = 1;
let cipolla = 0.989;
let banane = "gianni";
let zucchero = true;

if (cipolla > 2) {
  zucchero = false;
} else {
  cipolla++; // cipolla = cipolla + 1
}

document.write(cipolla + "<br>"); //fa un cast fra un tipo (numero)ed un tipo (stringa"") facendo una concatenazione
for (let i = 0; i <= 100; i++) {
  //dì dieci frasi- quantificato a priori,
  lattuga++;
}

while (lattuga < 101) {
  //non è finito il tempo, continuo a parlare - non so a priori quante volte voglio farla girare -> while
  cipolla++;
  lattuga++;
}

document.write(cipolla + "<br>");

let aglio = 1 + 3;
