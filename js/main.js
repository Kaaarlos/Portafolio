const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app,{
    loop: true,
    delay: 75
});

typewriter
    .typeString('la capital de la torta ahogada')
    .pauseFor(200)
    .start();
