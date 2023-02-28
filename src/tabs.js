export default function tabs(container){
    const div = document.createElement('div');
    div.classList.add('tabs')
    const names = ['Home', 'Menu', 'Contact'];
    names.forEach(element => {
        const tmp = document.createElement('div');
        tmp.classList.add('button');
        tmp.classList.add(element)
        const p = document.createElement('p');
        p.textContent = element;
        p.classList.add('tabs-text');
        tmp.appendChild(p);
        div.appendChild(tmp);
    });
    container.appendChild(div);
}
