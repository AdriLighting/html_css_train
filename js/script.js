
document.getElementById("link_1").addEventListener("click", ()=>console.log("link_1"))
document.getElementById("link_2").addEventListener("click", ()=>console.log("link_2"))

let array = document.querySelectorAll("div")
array.forEach((element, index)  => {
    var sClass = element.getAttribute("class");
    if (sClass == "filter-boxe") {
        console.log(index, element);
        element.addEventListener("click", () => {
            console.log(element.children[1].innerText);
        })
        
    }
})

