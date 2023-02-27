import initial_load from "./initial-page-load";
import './style.css';
import Img from './img.jpg';

const content = document.querySelector('div#content');
console.log(content);
const myImage = new Image();
myImage.src = Img;
content.appendChild(initial_load())
content.appendChild(myImage);
