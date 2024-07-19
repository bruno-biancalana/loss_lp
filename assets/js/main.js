// ### FUNÇÃO DE LOGIN -> INDEX.HTML ###
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Inclusão de usuários)
    if ( 
        username === "bruno" && password === "Bb123@2010" ||
        username === "lucas" && password === "misael"||
        username === "fernando" && password === "barbosa" ||
        username === "samuel" && password === "meli2024" ||
        username === "kevcosta" && password === "Kb230518!" ||
        username === "anlucena" && password === "Nova@2024" ||
        username === "cseduardo" && password === "Gui@300515" ||
        username === "taverissimo" && password === "Cl062384@" ||
        username === "matheus.arbex@mercadolivre.com" && password === "@KPIMeli2024@" ||
        username === "carolnsanches" && password === "@and2003" ||
        username === "crcarmo" && password === "Cris@0105" ||
        username === "michasilva" && password === "jedi3879MAH**" ||
        username === "pantoniassi" && password === "Padri1979" ||
        username === "demuniz" && password === "Dm010502@" ||
        username === "gbezerra" && password === "G10v@nN37357" ||
        username === "atoshie" && password === "1@Akiyama") {

        // Redirecione para a Home
        window.location.replace('home.html');
        localStorage.setItem('username', username);
    } else {

        // Credenciais incorretas
        document.getElementById("mensagemErro").innerText = "Credenciais incorretas, tente novamente.";
    }
});

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== Scroll de links ativos ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 





