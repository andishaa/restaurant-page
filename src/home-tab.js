export const homeContainer = () => {
    const container = document.createElement('div');
    const heroText = document.createElement('div');
    const h1 = document.createElement('h1');
    const h3 = document.createElement('h3');
    const heroBtn = document.createElement('button');

    container.classList.add('home-container');
    heroText.classList.add('hero-text');
    heroBtn.classList.add('reservations-btn');
    
    h1.textContent = 'Welcome to Juicy';
    h3.textContent = 'Your luxorious wine and dine place';
    heroBtn.textContent = 'Reservations';

    heroText.appendChild(h1);
    heroText.appendChild(h3);
    container.appendChild(heroText);
    container.append(heroBtn);
    return container;
}