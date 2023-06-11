const child = document.querySelector(".child");
const cb = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("inview");
      entry.target.classList.add("inview");
      // observer.unobserve(entry.target)
    } else {
      entry.target.classList.remove("inview");
      console.log("outview");
    }
  });
};
const io = new IntersectionObserver(cb);
io.observe(child); //監視する要素はchild
