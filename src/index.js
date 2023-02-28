import Home from "./home";
import Tabs from "./tabs"
import Menu from "./menu"
import './style.css';

const content = document.querySelector('div#content');
Tabs(content)
renderPage('Home')
const buttons = document.querySelectorAll('.button');
clickOnTabs(buttons);

function clearPage() {
    while (content.lastChild.className != 'tabs') {
        content.removeChild(content.lastChild);
    }
}

function renderPage(tab) {
    clearPage();
    if (tab === 'Menu') {
        Menu(content);
    } else if (tab == 'Contact') {
        Contact(content);
    } else {
        Home(content);
    }
}


function clickOnTabs(buttons) {
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const tab = e.currentTarget.classList[1];
            renderPage(tab);
        });
    });
}