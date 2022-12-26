'use strict';

//navbar
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', ()=>{
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar_dark');
  }else{
    navbar.classList.remove('navbar_dark');
  }
});

const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (e)=>{
  const target = e.target;
  const link = target.dataset.link;
  navbarMenu.classList.remove('open');
  scrolling(link);
});

//navbar toggle button
const navbarToggleBtn = document.querySelector('.navbar_toggle_btn');
navbarToggleBtn.addEventListener('click',()=>{
  const navbarMenu = document.querySelector('.navbar_menu');
  navbarMenu.classList.toggle('open');
});

//contact button scrolling
const contactBtn = document.querySelector('.home_button');
contactBtn.addEventListener('click', (e)=>{
  const target = e.target;
  const link = target.dataset.link;
  scrolling(link);
});

//home opacity 
const home = document.querySelector('.home_container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Arrow up
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll' , ()=>{
  if(window.scrollY>homeHeight/2){
    arrowUp.classList.add('visible');
  }else{
    arrowUp.classList.remove('visible');
  }
});

arrowUp.addEventListener('click', ()=>{
  scrolling('#home');
});

// Work filter
const workBtns = document.querySelector('.work_categories');
const workProjects = document.querySelector('.work_projects');
const project =  document.querySelectorAll('.project');

workBtns.addEventListener('click',(e)=>{

    const filter = e.target.dataset.filter;

    // active
    const active = document.querySelector('.category_btn.active');
    active.classList.remove('active');
    e.target.classList.add('active');

    workProjects.classList.add('anim-out');
    

    setTimeout(()=>{
      project.forEach((item)=>{
        console.log(item.dataset.type);
        if(filter === 'all' || filter === item.dataset.type){
          item.classList.remove('invisible');
        }else{
          item.classList.add('invisible');
        }
      });
      workProjects.classList.remove('anim-out');
    },300);
});

// scroll function
function scrolling(link){
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior : 'smooth'});
};