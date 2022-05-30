import './style.css';
import { initialPageLoad } from './page-load.js';
import { homeContainer } from "./home-tab";
import { menuContainer } from './menu-tab';
import { contactContainer } from './contact-tab';

initialPageLoad();

const tabSwitcher = () => {
    const navigation = document.querySelector('.navigation');
    const tabs = navigation.querySelectorAll('li');
    const content = document.getElementById('content');
    let selectedTab = '';

    const clearContent = () => { content.innerHTML = '' };

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            selectedTab = e.target.id;

            switch (selectedTab) {
                case 'home':
                    clearContent();
                    content.appendChild(homeContainer());
                    break;
                case 'menu':
                    clearContent();
                    content.appendChild(menuContainer());
                    break;
                case 'contact':
                    clearContent();
                    content.appendChild(contactContainer());
                    break;
                default:
                    break;
            }

        });
    });



};
tabSwitcher();