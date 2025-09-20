const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const carousel = document.querySelector(".carousel");
const listItem = document.querySelector(".carousel .list");
const thumbnail = document.querySelector(".carousel .thumbnail");

nextBtn.onclick = function () {
  showSlider("next");
};
prevBtn.onclick = function () {
  showSlider("prev");
};
const timeRunning = 3000;
const timeAutoNext = 5000;
let runTimeOut;
let timeAutoNextOut = setTimeout(() => {
  nextBtn.click();
}, timeAutoNext);
function showSlider(type) {
  const itemSlider = document.querySelectorAll(".carousel .list .item");
  const itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

  if (type === "next") {
    listItem.appendChild(itemSlider[0]);
    thumbnail.appendChild(itemThumbnail[0]);
    carousel.classList.add("next");
  } else {
    const lastItemPosition = itemSlider.length - 1;
    listItem.prepend(itemSlider[lastItemPosition]);
    thumbnail.prepend(itemThumbnail[lastItemPosition]);
    carousel.classList.add("prev");
  }
  clearTimeout(runTimeOut);
  setTimeout(() => {
    carousel.classList.remove("next");
    carousel.classList.remove("prev");
  }, timeRunning);
  clearTimeout(timeAutoNextOut);
  timeAutoNextOut = setTimeout(() => {
    nextBtn.click();
  }, timeAutoNext);
}
