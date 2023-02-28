
export default function contact(container) {
    let elements = [];
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('titleContainer')
    const title = document.createElement('h1');
    title.textContent = 'Contact information';
    title.classList.add('title', 'contact');
    titleContainer.appendChild(title);
    elements.push(titleContainer);

    const div = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = 'Do not contact us please!'
    div.appendChild(p);
    elements.push(div);

    elements.forEach(e => { container.appendChild(e) });
}
