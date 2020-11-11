/*
    Theme Name : Start Bootstrap
    Theme Description : using flexbox
    Author : GiaiVi
    Version : 1.0.0
*/

/*============================= Table Of Content =============================== 
1, Header
2, Banner
*/

/*================================ 2,Header ======================================== */

var nav = document.getElementById("mainHeader");
function shrinkHeader() {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        nav.classList.add("header-shrink");
    }
    else {
        nav.classList.remove("header-shrink");
    }
}

if (document.documentElement.clientWidth > 990)
{window.onscroll = function() {shrinkHeader();}}