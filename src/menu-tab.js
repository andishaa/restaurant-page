import ChefImg from './chef-menu-img.jpg';
import WineImg from './wine-menu-img.jpg';
import AperitifsImg from './aperitifs-menu-img.jpg';
import DigestiveImg from './digestive-menu-img.jpg';

export const menuContainer = () => {
    const container = document.createElement('div');
    const chefMenu = document.createElement('div');
    const wineMenu = document.createElement('div');
    const aperetifsMenu = document.createElement('div');
    const digestiveMenu = document.createElement('div');

    chefMenu.classList.add('menu-item');
    wineMenu.classList.add('menu-item');
    aperetifsMenu.classList.add('menu-item');
    digestiveMenu.classList.add('menu-item');
    container.classList.add('menu-container');

    const chefMenuTitle = document.createElement('div');
    const chefMenuImg = new Image();
    chefMenuImg.src = ChefImg;
    chefMenuImg.classList.add('menu-img');
    chefMenuTitle.classList.add('item-title');
    chefMenuTitle.innerHTML = "Season of spring </br> Chef's tasting menu";
    chefMenu.append(chefMenuImg, chefMenuTitle);

    const wineMenuTitle = document.createElement('div');
    const wineMenuImg = new Image();
    wineMenuImg.src = WineImg;
    wineMenuImg.classList.add('menu-img');
    wineMenuTitle.classList.add('item-title');
    wineMenuTitle.innerHTML = "Wine list";
    wineMenu.append(wineMenuImg, wineMenuTitle);

    const aperetifsMenuTitle = document.createElement('div');
    const aperetifsMenuImg = new Image();
    aperetifsMenuImg.src = AperitifsImg;
    aperetifsMenuImg.classList.add('menu-img');
    aperetifsMenuTitle.classList.add('item-title');
    aperetifsMenuTitle.innerHTML = "Aperitifs";
    aperetifsMenu.append(aperetifsMenuImg, aperetifsMenuTitle);

    const digestiveMenuTitle = document.createElement('div');
    const digestiveMenuImg = new Image();
    digestiveMenuImg.src = DigestiveImg;
    digestiveMenuImg.classList.add('menu-img');
    digestiveMenuTitle.classList.add('item-title');
    digestiveMenuTitle.innerHTML = "Digestive";
    digestiveMenu.append(digestiveMenuImg, digestiveMenuTitle);

    container.append(chefMenu, wineMenu, aperetifsMenu, digestiveMenu);

    return container;
}