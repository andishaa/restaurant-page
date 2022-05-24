export const homeContainer = () => {
    const element = document.createElement('div');
    element.classList.add('home-container');
    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to Juicy';
    element.appendChild(h1);

    return element;
}