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

// Insert Project Data

const projectSection = document.querySelector('.projects');

projects.forEach(project => {
    const projectContainer = document.createElement('DIV');
    projectSection.appendChild(projectContainer);
    projectContainer.innerHTML = `
        <div class="projectCardContent">
            <h3>${project.nameDE}</h3>
            <img src="${project.image}" alt="${project.alt}">
            <p class="langauges"><span>Benutzte Sprachen</span></br>${project.languages}</p>
            <p class="projectDescription">${project.descriptionDE}</p>
        </div>
        <div class="projectButtons">
            <div class="toProject">
                <a href="${project.linkPage}" target="_blank">Zum Projekt</a>
            </div>
            <div class="toGit">
                <a href="${project.linkGit}" target="_blank">Zu GitHub</a>
            </div>
        </div>
    `
    projectContainer.classList.add('projectCard');
});