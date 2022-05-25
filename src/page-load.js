import { homeContainer } from "./home-tab";

const header = () => {
    const header = document.createElement('header');
    header.classList.add('header');
    const nav = document.createElement('nav');
    nav.classList.add('navigation');
    const ul = document.createElement('ul');
    const home = document.createElement('li');
    home.textContent = 'Home';
    home.id = 'home';
    const menu = document.createElement('li');
    menu.textContent = 'Menu';
    menu.id = 'menu';
    const contact = document.createElement('li');
    contact.textContent = 'Contact';
    contact.id = 'contact';

    ul.appendChild(home);
    ul.appendChild(menu);
    ul.appendChild(contact);

    nav.appendChild(ul);

    header.appendChild(nav);

    return header;
};

const imageCopyright = () => {
    const element = document.createElement('div');
    element.classList.add('image-copyright');
    element.innerHTML = 'Photo by <a href="https://unsplash.com/@ninjason?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason Leung</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';

    return element;
}

const footer = () => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const currentYear = new Date().getFullYear();
    footer.innerHTML = `Copyright &copy; ${currentYear} <a href="https://github.com/andishaa"
    target="_blank">andisha</a>`;

    const projectNotice = document.createElement('p');
    projectNotice.classList.add('project-notice');
    projectNotice.innerHTML = 'This project is a part of <a href="https://www.theodinproject.com/" target="_blank">The Odin Project</a> curriculum';
    footer.appendChild(projectNotice);

    return footer;
}

export const initialPageLoad = () => {
    const content = document.getElementById('content');
    const body = document.body;

    body.prepend(header());
    content.appendChild(homeContainer());
    content.appendChild(imageCopyright());
    body.appendChild(footer());
}