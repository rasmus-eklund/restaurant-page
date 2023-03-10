import Menu from './menu.csv'
import Img from './food.jpg'

export default function menu(container) {
    let elements = [];
    const data = Menu;
    let menu = {};
    const categories = new Set(data.map(function (i) { return i[0] }));
    categories.forEach(item => { menu[item] = []; });
    data.forEach(item => { menu[item[0]].push({ name: item[1], price: item[2] }) });

    categories.forEach(category => {
        const div_category = document.createElement('div');
        div_category.classList.add('category')
        const p_categoryTitle = document.createElement('p');
        p_categoryTitle.className = 'category-title';
        p_categoryTitle.textContent = capitalizeFirstLetter(category);
        div_category.appendChild(p_categoryTitle);
        menu[category].forEach(item => {
            const div_item = document.createElement('div');
            div_item.classList.add('item');
            const item_info = document.createElement('p');
            item_info.classList.add('item-text');
            item_info.textContent = formatString(item['name'], item['price']);
            div_category.appendChild(item_info);
        });
        elements.push(div_category);
    });

    const image = new Image(400);
    image.className = 'food'
    image.src = Img;
    elements.push(image);

    elements.forEach(e => { container.appendChild(e) });
}

function formatString(name, price) {
    const l = name.length + price.length + 2;
    let dots = ''
    for (let i = 0; i < 50-l; i++) {
        dots += '.'
    }
    return name + dots + price + ' £'
};

function capitalizeFirstLetter(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}