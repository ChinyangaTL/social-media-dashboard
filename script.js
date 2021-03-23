const toggle = document.querySelector('.toggle');
const modeText = document.querySelector('.mode-text')

toggle.addEventListener('click', e => {
    document.body.classList.toggle('lightmode')

    if(document.body.classList.contains('lightmode')) {
        modeText.innerText = 'Dark Mode';
    }
    else {
        modeText.innerText = 'Light Mode';
    }
})