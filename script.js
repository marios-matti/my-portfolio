let navBar = document.querySelector(".list");
let letScrollTop = 0;
window.addEventListener("scroll", function () {
  const scrollTopPage =
    window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTopPage > letScrollTop) {
    navBar.style.top = "-40px";
  } else {
    navBar.style.top = "0";
  }
  letScrollTop = scrollTopPage;
});
