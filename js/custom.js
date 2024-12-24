$(".footer-links-wrapper h3").on("click", show);
function show(){
    $(this).toggleClass("expanded");
    $(this).next("ul").slideToggle();
}