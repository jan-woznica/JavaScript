/* 
querySelector označuje element a udržuje to v proměnné myHeading
a my heading nastavuje proměnnou pomocí textContent - představuje text nadpisu
*/
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

/* return říká prohlížeči, aby vrátil výsledek funkce, abychom s ním mohli pracovat.
To je důležité protože výsledky do té doby jsou dostupné pouze uvnitř funkce*/
let myvariable= "bob";
return myvariable;

/* Označíme html, a zavoláme jeho addeventlistener funkci, která říká, že má poslouchat na event click a rozběhnout funkci, kf
dyž se to stane*/
document.querySelector("html").addEventListener("click", function () {
  alert("Au, přestaň");
});
