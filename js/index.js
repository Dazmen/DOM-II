// Your code goes here
const headerImg = document.querySelector('header img');
headerImg.addEventListener('mouseenter', ()=>{
    headerImg.style.transform = 'scale(1.1)'
    headerImg.style.transition = '0.5s';
})
headerImg.addEventListener('mouseleave', ()=>{
    headerImg.style.transform = 'scale(1.0)'
})

const textContent = document.querySelectorAll('.text-content');
textContent.forEach(el=>{
    el.addEventListener('mouseover', ()=>{
        el.style.backgroundColor = 'black';
        el.style.color = 'white';
        el.style.transition = '0.7s';
    })
})
textContent.forEach(el=>{
    el.addEventListener('mouseleave', ()=>{
        el.style.backgroundColor = 'white';
        el.style.color = 'black';
    })
})
textContent.forEach(el=>{
    el.addEventListener('click', (e)=>{
        el.style.backgroundColor = 'black';
        el.style.color = '#FFA71A';
        el.style.transition = '0.7s';
        e.stopPropagation();
    })
})

const logo = document.querySelector('.logo-heading');
logo.addEventListener('dblclick', ()=>{
    logo.style.fontSize = '10rem';
    logo.style.color = '#FFA71A';
    
})
logo.addEventListener('click', (e)=>{
    logo.style.fontSize = '2rem';
    logo.style.color = '#FFA71A';
    e.stopPropagation();
})
logo.addEventListener('mouseleave', ()=>{
    logo.style.fontSize = '4rem';
    logo.style.color = 'black';
})

const home = document.querySelector('.home');
home.addEventListener('mousedown', ()=>{
    home.style.backgroundColor = '#FFA71A';
    home.style.maxWidth = '100%';
    })

home.addEventListener('mouseup', ()=>{
    home.style.backgroundColor = 'white';
    home.style.maxWidth = '800px';
    })
const body = document.querySelector('body');
document.addEventListener('keydown', () =>{
    body.style.backgroundColor = 'black';
    body.style.color = '#FFA71A';
})
document.addEventListener('keyup', () =>{
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
})

const nav = document.querySelector('.nav-container')
nav.addEventListener('click', ()=>{
    nav.style.backgroundColor = 'blue';
})
nav.addEventListener('mouseup', ()=>{
    nav.style.backgroundColor = 'white';
})
const links = document.querySelectorAll('nav a');
links.forEach(el =>{
    el.addEventListener('click',(e)=>{
        e.preventDefault();
        e.stopPropagation();
    })
})

const btn = document.querySelectorAll('.btn')
btn.forEach(el =>{
    el.addEventListener('mousedown',()=>{
        alert('Sorry, all spots are filled!');
    })
})