/*

1. show / hide button

---------------------------

*/

// create variables

const toggleBtn = document.querySelector('#check');
const mobileMenu = document.querySelector('.mobileLinks');

toggleBtn.addEventListener('click', () => {
    if(mobileMenu.style.display === 'none') {
        mobileMenu.style.display = 'inline';
    } else {
        mobileMenu.style.display = 'none';
    }
});

/* document.addEventListener('DOMContentLoaded', init);

function init() {
    let query = window.matchMedia("(min-width: 600px)");

    if(query.matches) {
        //If the page is wider than 800px
        //document.querySelector('.mobileLinks').style.display = "none";
        document.querySelector('.mobileLinks').style.display = "none";
    } else {
        //If the page is narrower than 801px;
        document.querySelector('.mobileLinks').style.display = "none";
    }
} */

const matchResult = window.matchMedia("(min-width: 600px)");

//console.log(matchResult)

function isSmallScreen() {
    if (window.matchMedia("(min-width: 600px)").matches) {
        return true;
}   return false;

}