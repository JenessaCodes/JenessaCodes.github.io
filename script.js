let project = document.getElementsByClassName("project")

for (let i=0; i < project.length; i++) {
    project[i].addEventListener("mouseover", function (event) {
    project[i].style.backgroundColor = "rgba(211, 137, 98, 1)";
    project[i].style.boxShadow = "0 0 1rem rgba(211, 137, 98, 1)";
    })
}

for (let i=0; i < project.length; i++) {
    project[i].addEventListener("mouseout", function () {
    project[i].style.backgroundColor = "rgba(247, 243, 242, 1)";
    project[i].style.boxShadow = "none"
    })
}

let repositories = document.getElementById("repositories")

repositories.addEventListener("mouseover", function (event) {
    repositories.style.color = "rgba(0, 0, 0, .5)";
})

repositories.addEventListener("mouseout", function (event) {
    repositories.style.color = "rgba(0, 0, 0, 1)";
})

let hamburger = document.querySelector("button")
let menu = document.querySelector("nav")

hamburger.addEventListener("click", function (){
    menu.classList.toggle("show")
})


