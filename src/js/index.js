let lis = document.querySelectorAll("header ul li");
let box = document.querySelectorAll("section .content");
let lisArr = Array.from(lis)
lis[0].classList.add("active");
box[0].style.display = "block";


function hideBox() {
    for (let i = 0; i < box.length; i++) {
        box[i].style.display = "none";
    }
}

function removeClass() {
    for (let i = 0; i < lis.length; i++) {
        lis[i].classList.remove("active")
    }
}
lisArr.map(function(file, index) {
    file.onclick = function() {
        removeClass();
        hideBox();
        lis[index].classList.add("active");
        box[index].style.display = "block";
    }
})