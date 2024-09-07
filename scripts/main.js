const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/billie.jfif") {
    myImage.setAttribute("src", "images/kim.png");
  } else {
    myImage.setAttribute("src", "images/billie.jfif");
  }
};
