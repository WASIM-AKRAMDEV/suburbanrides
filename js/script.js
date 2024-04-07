document.addEventListener("DOMContentLoaded", function () {
  window.onscroll = function () {
    stickyNavbar();
  };

  var navbar = document.getElementById("topbar");
  var sticky = navbar.offsetTop;

  function stickyNavbar() {
    if (window.scrollY >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var menuBtns = document.querySelectorAll("#menu");
  var offcanvasMenu = document.querySelector(".offcanvas-menu");

  menuBtns.forEach((menu) => {
    menu.onclick = function () {
      menu.classList.toggle("openmenu");
      offcanvasMenu.classList.toggle("openOffcanvas");
    };
  });
});

const txts = document.querySelector(".animate-text").children;
const txtsLen = txts.length;
let index = 0;

function animateText() {
  for (let i = 0; i < txtsLen; i++) {
    txts[i].classList.remove("text-in");
  }
  txts[index].classList.add("text-in");
}

function updateIndex(direction) {
  if (direction === "left") {
    index = index === 0 ? txtsLen - 1 : index - 1;
  } else {
    index = index === txtsLen - 1 ? 0 : index + 1;
  }
  animateText();
}

// Trigger animation on window load
window.onload = function () {
  animateText();
  setTimeout(function () {
    txts[index].classList.add("animate-text-transition");
  }, 100);
  setTimeout(function () {
    txts[index].classList.remove("animate-text-transition");
  }, 900);
  setInterval(function () {
    updateIndex("right");
    setTimeout(function () {
      txts[index].classList.add("animate-text-transition");
    }, 100);
    setTimeout(function () {
      txts[index].classList.remove("animate-text-transition");
    }, 900);
  }, 5000);
};

// Handle left chevron click
document.getElementById("left-chevron").addEventListener("click", function () {
  updateIndex("left");
});

// Handle right chevron click
document.getElementById("right-chevron").addEventListener("click", function () {
  updateIndex("right");
});


