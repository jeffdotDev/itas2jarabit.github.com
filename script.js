
let iconMenu = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

iconMenu.onclick = () => {
    iconMenu.classList.toggle('bx-x');
    navBar.classList.toggle('active');


};




let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let  offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');

            });

        };

    
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    iconMenu.classList.remove('bx-x');
    navBar.classList.remove('active');


};

window.addEventListener("scroll", reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    
    for(var i = 0; reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('actives');
        }
        else{
           reveals[i].classList.remove('actives'); 
        }

    }
}



