const scrollHandler = (location) => {
  var num = window.scrollY / window.innerHeight;
  var x = 0;

  if (num <= 1) {
    document.getElementById("mouse").style.opacity = 1 - num * 1.2;
    x = (1 - num) * 2;
    document.getElementById("mouse").style.transform =
      "translateY(" + x + "px)";
  }
};

const scroll_fadeout = (location) => {
  if (location && location.pathname === "/") {
    window.addEventListener("scroll", scrollHandler);
  } else if (location && location.pathname === "/more-about") {
    window.removeEventListener("scroll", scrollHandler);
  }
};

export default scroll_fadeout;