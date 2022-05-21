import './style.css';

function header() {
    const header = document.createElement('header');

    header.innerHTML = 'test if working';
    header.classList.add('header');

    return header;
};

document.body.prepend(header());