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
const annuler = document.querySelector('.annuler');
const rechercher = document.querySelector('.rechercher');
const results = document.querySelector('.results');

const token = '2bb58aceddb0cb94943a7226864991914f2a61f093db1a90e68f5c6533770fe0';
function apiRechercher(){
    results.innerHTML = "";
    fetch(`https://api.meteo-concept.com/api/location/cities?token=${token}&search=${searchBar.value}`)
    .then(res => res.json())
    //.then(json => console.log(json))
    .then(json => nameBuild(json))
}
function nameBuild(json){
    json.cities.forEach(item => {
        const city = document.createElement('div');
        const lat = item.latitude;
        const long = item.longitude;
        const insee = item.insee;
        const name = item.name;
        city.classList.add('city');
        city.textContent = item.name;
        city.addEventListener('click', () => {
            fetch(`https://api.meteo-concept.com/api/forecast/nextHours?token=${token}&latlng=${lat}%2C${long}&insee=${insee}&hourly=true`)
            .then(res => res.json())
            .then(json => arrayHourlyBuild(json.forecast[0].datatime.slice(11,16), json.forecast[0].rr10, json.forecast[1].datetime.slice(11,16), json.forecast[1].rr10, json.forecast[2].datetime.slice(11,16), json.forecast[2].rr10, json.forecast[3].datetime.slice(11,16), json.forecast[3].rr10, json.forecast[4].datetime.slice(11,16), json.forecast[4].rr10 ))
            searchBar.style.backgroundColor = '#A4C8FF';
            searchBar.style.color = '#FFFFFF';
            searchBar.style.backgroundImage = 'url(./assets/images/search.png)';
            search.style.height = '0%';
            annuler.style.display = 'none';
            rechercher.style.display = 'none';
            searchBar.placeholder = name;
            searchBar.value = '';
        })
        const ligne = document.createElement('div');
        ligne.classList.add('ligne');
        results.append(city, ligne);
    })
}
searchBar.addEventListener('click', () => {
    searchBar.style.backgroundColor = '#FFFFFF';
    searchBar.style.color = '#2A7FFF';
    searchBar.style.backgroundImage = 'url(./assets/images/search-blue.png)';
    search.style.height = '80%';
    annuler.style.display = 'flex';
    rechercher.style.display = 'flex';
})
annuler.addEventListener('click', () => {
    searchBar.style.backgroundColor = '#A4C8FF';
    searchBar.style.color = '#FFFFFF';
    searchBar.style.backgroundImage = 'url(./assets/images/search.png)';
    search.style.height = '0%';
    annuler.style.display = 'none';
    rechercher.style.display = 'none';
})

document.addEventListener('keypress', (e) => {
    if(e.key === "Enter" && e.target.value !== ""){
        apiRechercher();
        results.style.overflowY = 'scroll';
    }
})
rechercher.addEventListener('click', () => {
    if(searchBar.value !== ""){
        apiRechercher();
        results.style.overflowY = 'scroll';
    }
})