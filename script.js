function toggleMenu(state) {
  let sidebar = document.getElementById("sidebar");
  let openBtn = document.getElementById("open-btn");
  let closeBtn = document.getElementById("close-btn");

  if (state === "open") {
    document.body.style.overflowY = "hidden";
    sidebar.classList.remove("hidden");
    sidebar.classList.add("flex");
    openBtn.classList.remove("animate-rotate-right");
    closeBtn.classList.remove("animate-rotate-right");
    openBtn.classList.add("animate-rotate-left");
    closeBtn.classList.add("animate-rotate-left");
    sidebar.classList.add("animate-slide-in");
  } else {
    document.body.style.overflowY = "";
    sidebar.classList.add("animate-slide-out");
    openBtn.classList.remove("animate-rotate-left");
    closeBtn.classList.remove("animate-rotate-left");
    setTimeout(() => {
      openBtn.classList.add("animate-rotate-right");
      closeBtn.classList.add("animate-rotate-right");
      sidebar.classList.add("hidden");
      sidebar.classList.remove("flex");
      sidebar.classList.remove("animate-slide-out");
    }, 300);
  }
}

function Marquee(selector, speed) {
  const parentSelector = document.querySelector(selector);
  const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];
  let i = 0;
  console.log(firstElement);
  parentSelector.insertAdjacentHTML("beforeend", clone);
  parentSelector.insertAdjacentHTML("beforeend", clone);

  setInterval(function () {
    firstElement.style.marginLeft = `-${i}px`;
    if (i > firstElement.clientWidth) {
      i = 0;
    }
    i = i + speed;
  }, 0);
}
window.addEventListener("load", Marquee(".marquee", 0.2));
