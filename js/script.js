// css theme
let cssTheme = document.querySelector('[name=cssTheme]');

// select theme
let theme = document.querySelector('[name=theme]');
let theme1 = document.querySelector('[name=theme1]');
let theme2 = document.querySelector('[name=theme2]');

// button theme
let themeBtn1 = document.querySelector('#theme-1');
let themeBtn2 = document.querySelector('#theme-2');

// change css (select)
theme1.addEventListener('click', function () {
    if (cssTheme.getAttribute('href') == 'css/template.css') {
        cssTheme.setAttribute('href', 'css/theme1.css');
    }
});
theme2.addEventListener('click', function () {
    if (window.confirm('Theme 2 will update next time...')) {
        let github = prompt('Input your username github');
        if (github == null) {
            window.open();
        } else {
            window.open('https://github.com/' + github, '_blank');
        }
    }
});

// change css (button)
themeBtn1.addEventListener('click', function () {
    if (cssTheme.getAttribute('href') == 'css/template.css') {
        cssTheme.setAttribute('href', 'css/theme1.css');
    }
});
themeBtn2.addEventListener('click', function () {
    if (window.confirm('Theme 2 will update next time...')) {
        let github = prompt('Input your username github');
        if (github == null) {
            window.open();
        } else {
            window.open('https://github.com/' + github, '_blank');
        }
    }
});