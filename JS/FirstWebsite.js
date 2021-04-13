
const menuBarIcon = document.querySelector(".mobileMenuBar");
const subMenuIcon = document.querySelectorAll(".dropdown");
const subMenuIcon2 = document.querySelectorAll(".dropdown2");
menuBarIcon.addEventListener("click", () => {
    
    const subMenuIcon = document.querySelectorAll(".dropdown");
    
    document.querySelector(".Menu").classList.toggle("MenuShow");
    

})

subMenuIcon.forEach(function(node) {
    node.querySelector("a").innerHTML += "<i class='fas fa-chevron-down'></i>";
    
 node.addEventListener("click", function () {
    
    this.querySelector(".SubMenu").classList.toggle("SubMenuShow");


})

})



subMenuIcon2.forEach(function(node) {
    node.querySelector("a").innerHTML += "<i class='fas fa-chevron-down'></i>";
 
    node.addEventListener("click", function (myEvent) {
    this.querySelector(".SubMenu2").classList.toggle("SubMenu2Show");
        myEvent.stopPropagation();

})

})