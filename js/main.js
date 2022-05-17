// RICHIESTE
const nomeUtente = prompt("Nome");
const cognomeUtente = prompt("Cognome");
const coloreUtente = prompt("Colore preferito")
console.log(nomeUtente, cognomeUtente, coloreUtente);
// NICKNAME
const spanNickName = document.getElementById("nickname");
spanNickName.innerHTML = ${nomeUtente} ${cognomeUtente} ${coloreUtente}<span>22</span>;
console.dir(spanNickName);
