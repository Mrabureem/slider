const carousel = document.querySelector(".carousel");
const list = document.querySelector(".carousel .list");
const thumbnail = document.querySelector(".carousel .thumbnail");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

nextBtn.onclick = function () {
  changeSlider("next");
};
prevBtn.onclick = function () {
  changeSlider("prev");
};
const timeOut = 4000;
const autoRunTime = 7000;
let autoRunSlider = setTimeout(() => {
  nextBtn.click();
}, autoRunTime);

let removeTimeout;
function changeSlider(type) {
  const itemsList = document.querySelectorAll(".carousel .list .item");
  const itemsThumbnail = document.querySelectorAll(
    ".carousel .thumbnail .item"
  );
  if (type === "next") {
    list.appendChild(itemsList[0]);
    thumbnail.appendChild(itemsThumbnail[0]);
    carousel.classList.add("next");
  } else {
    let lastItemIndex = itemsList.length - 1;
    carousel.classList.add("prev");
    list.prepend(itemsList[lastItemIndex]);
    thumbnail.prepend(itemsThumbnail[lastItemIndex]);
  }
  clearTimeout(removeTimeout);
  setTimeout(() => {
    carousel.classList.remove("next");
    carousel.classList.remove("prev");
  }, timeOut);
  clearTimeout(autoRunSlider);
  autoRunSlider = setTimeout(() => {
    nextBtn.click();
  }, autoRunTime);
}
