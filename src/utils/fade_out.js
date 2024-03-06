const scroll_fadeout = () => {
    window.addEventListener("scroll", () => {
      var num = window.scrollY / window.innerHeight;
      var x = 0;

      if (num <= 1) {
        document.getElementById("mouse").style.opacity = 1 - num * 1.2;
        x = (1 - num) * 2;
        document.getElementById("mouse").style.transform =
          "translateY(" + x + "px)";
      }
    });
};

export default scroll_fadeout;
