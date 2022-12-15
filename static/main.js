const outer = document.getElementById("outer");
const upper = document.getElementById("upper");
const pants = document.getElementById("pants");
const shoes = document.getElementById("shoes");
const contents = document.getElementById("images");
const outerimgs = document.getElementById("outerimages");
const upperimgs = document.getElementById("upperimages");
const pantsimgs = document.getElementById("pantsimages");
const shoesimgs = document.getElementById("shoesimages");

outer.addEventListener("click", e => {
  e.preventDefault();
  chose("outer");
});

upper.addEventListener("click", e => {
  e.preventDefault();
  console.log("upper");
  chose("upper");
});

pants.addEventListener("click", e => {
  e.preventDefault();
  console.log("pants");
  chose("pants");
});

shoes.addEventListener("click", e => {
  e.preventDefault();
  console.log("shoes");
  chose("shoes");
});

function chose(chosenmenu) {
  switch (chosenmenu) {
    case "outer":
      outer.style.border = "3px solid black";
      outer.style.fontWeight = 800;
      upper.style.border = "none";
      upper.style.fontWeight = 500;
      pants.style.border = "none";
      pants.style.fontWeight = 500;
      shoes.style.border = "none";
      shoes.style.fontWeight = 500;
      outerimgs.style.display ="";
      upperimgs.style.display ="none";
      pantsimgs.style.display ="none";
      shoesimgs.style.display ="none";
      break;
    case "upper":
      outer.style.border = "none";
      outer.style.fontWeight = 500;
      upper.style.border = "3px solid black";
      upper.style.fontWeight = 800;
      pants.style.border = "none";
      pants.style.fontWeight = 500;
      shoes.style.border = "none";
      shoes.style.fontWeight = 500;
      outerimgs.style.display ="none";
      upperimgs.style.display ="";
      pantsimgs.style.display ="none";
      shoesimgs.style.display ="none";
      break;
    case "pants":
      outer.style.border = "none";
      outer.style.fontWeight = 500;
      upper.style.border = "none";
      upper.style.fontWeight = 500;
      pants.style.border = "3px solid black";
      pants.style.fontWeight = 800;
      shoes.style.border = "none";
      shoes.style.fontWeight = 500;
      outerimgs.style.display ="none";
      upperimgs.style.display ="none";
      pantsimgs.style.display ="";
      shoesimgs.style.display ="none";
      break;
    case "shoes":
      outer.style.border = "none";
      outer.style.fontWeight = 500;
      upper.style.border = "none";
      upper.style.fontWeight = 500;
      pants.style.border = "none";
      pants.style.fontWeight = 500;
      shoes.style.border = "3px solid black";
      shoes.style.fontWeight = 800;
      outerimgs.style.display ="none";
      upperimgs.style.display ="none";
      pantsimgs.style.display ="none";
      shoesimgs.style.display ="";
      break;
  }
};