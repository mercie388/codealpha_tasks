document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()
        document.querySelector(link.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
    });
});
document.querySelector('#contact form')?.addEventListener('submit', e =>{
    e.preventDefault();
    alert('Message sent!');
    e.target.reset();
});