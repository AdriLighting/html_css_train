
function _debug(activate) {
    let id;
    let array = [
        ["header", "aquamarine"],
        // [".navbar-top-logo", "rgb(234, 0, 255)"],
        // ["ul.navbar-top-menu ", "rgb(111, 0, 255, .2)"],
        ["#site-title", "rgb(0, 255, 42)"],
        ["main", "rgb(255, 255, 0)"],
        ["#section_search ", "rgba(204, 0, 255, 0.767)"],
        ["#section_filtres", "aquamarine"],
        ["#section_filtres h2", "#0065FC"],
        [".filtres-boxs", "#00d6fc"],
    ]
    array.forEach(element => {
        id = document.querySelector(element[0]);
        var value = "transparent";
        if (activate) value = element[1];
        id.style.backgroundColor = value;
    });
}
