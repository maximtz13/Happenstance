var bandNameEl = document.getElementsByClassName("band".value)
localStorage.setItem("search", bandNameEl)
console.log(bandNameEl)
window.localStorage.getItem("search")

