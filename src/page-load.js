const header = () => {
    const header = document.createElement('header');
    header.classList.add('header');
    const nav = document.createElement('nav');
    nav.classList.add('navigation');
    const ul = document.createElement('ul');
    const home = document.createElement('li');
    home.textContent = 'Home';
    const menu = document.createElement('li');
    menu.textContent = 'Menu';
    const contact = document.createElement('li');
    contact.textContent = 'Contact';

    ul.appendChild(home);
    ul.appendChild(menu);
    ul.appendChild(contact);

    nav.appendChild(ul);

    header.appendChild(nav);

    return header;
};

export const initialPageLoad = () => {
    document.body.prepend(header());
    const content = document.getElementById('content');

}