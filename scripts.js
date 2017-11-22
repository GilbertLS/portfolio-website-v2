function smoothScroll(id) {
  var rect = document.getElementById(id).getBoundingClientRect();
  window.scroll({
    top: rect.y,
    left: 0,
    behavior: 'smooth'
  });
}
