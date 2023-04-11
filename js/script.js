
document.getElementById("link_1").addEventListener("click", ()=>console.log("link_1"))
document.getElementById("link_2").addEventListener("click", ()=>console.log("link_2"))

let array = document.querySelectorAll("button")
array.forEach(element => {
    var sClass = element.getAttribute("class");
    if (sClass == "filter-boxe") {
        element.addEventListener("click", () => {
            console.log(element);
        })
        
    }
})

