


let list = document.querySelectorAll(".navigation li");


function activeLink() {
    list.forEach((item) => {
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}



list.forEach((item) => item.addEventListener("click", activeLink));

// Menu Toggle 

const mytoggle = document.querySelector(".toggle");
const navigation = document.querySelector("#navigation");
const main = document.querySelector(".main");


// console.log(toggle);

mytoggle.onclick = () => {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
}









