//смена темы на светлую / тёмную

document.querySelector('.themetoggle').addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'light') {
        localStorage.removeItem('theme');
        }
        else {
        localStorage.setItem('theme', 'light')
        }
        addlightClassToHTML()
    });
    
function addlightClassToHTML() {
    try {
    if (localStorage.getItem('theme') === 'light') {
        document.querySelector('html').classList.add('light');
    }
    else {
        document.querySelector('html').classList.remove('light');
    }
    } catch (err) { }
}
    
addlightClassToHTML();