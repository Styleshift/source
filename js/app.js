/*

1. show / hide button

---------------------------

*/

// create variables

const toggleBtn = document.querySelector('#check');
const mobileMenu = document.querySelector('.mobileLinks');

toggleBtn.addEventListener('click', () => {
    if(mobileMenu.style.display === 'none') {
        mobileMenu.style.display = 'block';
    } else {
        mobileMenu.style.display = 'none';
    }
});