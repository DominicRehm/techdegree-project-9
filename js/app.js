// Display Mobile Nav

const mobileNavBtn = document.querySelector('.mobileNavBtn');
const mobileCloseBtn = document.querySelector('.mobileCloseBtn');
const mobileNav = document.querySelector('.mobileNav');
let mobileNavActive = false;

mobileNavBtn.addEventListener('click', () => {
    if (mobileNavActive !== true) {
        mobileNav.style.height = '100%'
        mobileNavBtn.style.transform = 'translateX(-270px)';
        mobileNavBtn.style.opacity = '0';
        mobileNavActive = true;
    } 
});

mobileCloseBtn.addEventListener('click', () => {
    if (mobileNavActive) {
        mobileNav.style.height = '0%';
        mobileNavBtn.style.transform = 'translateX(0px)';
        mobileNavBtn.style.opacity = '1';
        mobileNavActive = false;
    }
});

