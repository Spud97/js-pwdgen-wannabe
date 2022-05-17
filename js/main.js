// RICHIESTE
const nomeUtente = prompt("Nome");
const cognomeUtente = prompt("Cognome");
const coloreUtente = prompt("Colore preferito")
// NICKNAME
const NickName = document.getElementById("nickname");
NickName.innerHTML = `${nomeUtente}${cognomeUtente}${coloreUtente}22`;
console.log(NickName);
