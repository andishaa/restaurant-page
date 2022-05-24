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

export const initialPageLoad = () => {
    document.body.prepend(header());
    const content = document.getElementById('content');

}