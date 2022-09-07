let button = document.querySelector('#mode');
let span = document.querySelector('span');

function modeSombre() {
    document.body.classList.add('dark');
    span.textContent = 'Thème clair';
    localStorage.setItem('theme', 'sombre');
}

if (localStorage.getItem('theme') != null) {
    if (localStorage.getItem('theme') === 'sombre') {
        modeSombre();
    }
}

button.addEventListener('click', () => {
    let dark = document.body.classList.contains('dark');
    if (dark) {
        document.body.classList.remove('dark');
        span.textContent = "Thème sombre";
        localStorage.setItem('theme', 'clair');
    } else {
        modeSombre();
    }
});