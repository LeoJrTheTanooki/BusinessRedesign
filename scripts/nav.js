const hamImg = document.getElementById("hamImg");
const hamBtn = document.getElementById("hamBtn");

let isFirstImage = true;

hamBtn.addEventListener("click", function() {
  if (isFirstImage) {
    hamImg.src = "../assets/ToolboxOpen.png";
  } else {
    hamImg.src = "../assets/Toolbox.png";
  }
  isFirstImage = !isFirstImage;
});
