// Menu hidden
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

//Remove menu mobile
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav-link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//Accordion skills
const skillsContent = document.getElementsByClassName('skills-content')
    skillsHeader = document.querySelectorAll('.skills-header')

function toggleSkills(){
    let itemClass  = this.parentNode.ClassName

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills-content skills-close'
    }
    if(itemClass === 'skills-content skills-close'){
        this.parentNode.className = 'skills-content skills-open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

