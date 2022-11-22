import "./default.scss"
import Loading from "./compenent/loading";
import Home from "./compenent/home";
import Header from "./compenent/header";
import Footer from "./compenent/footer";

const app = document.getElementById('app');

let content = "";
content += Loading();
content += Header();
content += Home();
content += Footer();
app.innerHTML = content;

const loadingScreen = document.querySelector('.loading-screen');
let waitingLoading = window.setTimeout(animation, 1500);
function animation(){
    loadingScreen.style.marginLeft = '-500px';
}

const homeFooterTitle = document.querySelector('.home-footer-title');
const homeFooterButton = document.querySelector('.home-footer-button');
const mapFooterButton = document.querySelector('.map-footer-button');

const bodyHome = document.querySelector('.main');
const boutonMap = document.querySelector('.map-footer-button');
boutonMap.addEventListener('click', () => {
    bodyHome.style.marginLeft = '-100%';
    mapFooterButton.style.opacity = '1';
    homeFooterButton.style.opacity = '0.5';
})

const boutonHome = document.querySelector('.home-footer-button');
boutonHome.addEventListener('click', () => {
    bodyHome.style.marginLeft = '0%';
    mapFooterButton.style.opacity = '0.5';
    homeFooterButton.style.opacity = '1';
})

const searchBar = document.querySelector('.search-bar');
const search = document.querySelector('.search');
searchBar.addEventListener('click', () => {
    searchBar.style.backgroundColor = '#FFFFFF';
    searchBar.style.color = '#292929';
    search.style.height = '80%';
})