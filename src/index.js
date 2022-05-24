import './style.css';
import { initialPageLoad } from './page-load.js';
import { homeContainer } from "./home-tab";

initialPageLoad();

const tabSwitcher = () => {
    const navigation = document.querySelector('.navigation');
    const tabs = navigation.querySelectorAll('li');
    const content = document.getElementById('content');
    let selectedTab = '';

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            selectedTab = e.target.id;
            
            switch (selectedTab) {
                case 'home':
                    content.innerHTML = '';
                    content.appendChild(homeContainer());
                    break;

                default:
                    break;
            }

        });
    });



};
tabSwitcher();