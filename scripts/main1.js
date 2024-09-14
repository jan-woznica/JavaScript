/*img jsem uschoval v myImage*/
const myImage = document.querySelector("img");
/*Poté jsem vytvořil anonymní eventhandler onclick
a kód vezme src a kontroluje, zda je rovna nebo ne*/
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/billie.jfif") {
    myImage.setAttribute("src", "images/kim.jpg");
  } else {
    myImage.setAttribute("src", "images/billie.jfif");
  }
};
