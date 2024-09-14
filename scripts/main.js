/*Personalizovaná zpráva - nyní vybere, kam to chceme směřovat*/ 
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
/*Nyní je funkce
setusername funkce obsahuje prompt() funkci, které ukážw okno
poté kód volá API localstorage, která umožnuje skladovat data a získat je později
J8 používám localstorage seitem funkci, která vytvoří a uloží data jména pod názvem myName
poté nastavíme texContent na string + jméno*/
function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}
/*Nyní je tu podmínkový blok po funkci, který inicializuje kód při prvním načtení
první řádek obsahuje negační operátor NOT representovaný pomocí !, který kontrluje, zda data existují
Pokud ne, tak běží funkce, Když ano, tak se vytáhne z local storage
Data stáhneme pomocí getItem a nastavíme textcontent nadpisu na string+ jméno*/
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
