var dark = false;
var a = document.body;
var p = document.getElementById("select")


function darkLight() {
  if (!dark) {
    a.className = "theme-light";
    p.innerHTML = "";
    console.log(p);
  } else {
    // a.className.remove("theme-dark");
    a.className = "theme-dark";
    p.innerHTML = "";

  }

  dark = !dark;
  
}

const h2 = document.querySelector('h2');
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    h2.style.right = '0';
  } else {
    h2.style.right = '-100%';
  }
});