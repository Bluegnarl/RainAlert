import "./default.scss"
import Loading from "./compenent/loading";
import Home from "./compenent/home";

const app = document.getElementById('app');

let content = "";
content += Loading();
content += Home();
app.innerHTML = content;

const loadingScreen = document.querySelector('.loading-screen');

let waitingLoading = window.setTimeout(animation, 1500);

function animation(){
    loadingScreen.style.marginLeft = '-500px';
}