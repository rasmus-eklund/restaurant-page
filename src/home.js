import Story from './story.csv'
import Img from './chef.jpg'

export default function home(container) {
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('titleContainer')

    const title = document.createElement('h1');
    title.textContent = 'Restaurant';
    title.classList.add('title');
    titleContainer.appendChild(title);

    const storyContainer = document.createElement('div');
    storyContainer.className = 'story';
    Story.forEach(p => {
        const par = document.createElement('p');
        par.textContent = p;
        storyContainer.appendChild(par);
    });

    const image = new Image(200);
    image.className = 'chef'
    image.src = Img;

    const elements = [titleContainer, storyContainer, image];
    elements.forEach(e => { container.appendChild(e) });
}