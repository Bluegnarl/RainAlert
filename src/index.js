import "./default.scss"

import { Chart } from "chart.js/auto";

const app = document.getElementById('app');

// Import HTML //
import Loading from "./compenent/loading";
import Home from "./compenent/home";
import Header from "./compenent/header";
import Footer from "./compenent/footer";

let content = "";
content += Loading();
content += Header();
content += Home();
content += Footer();
app.innerHTML = content;

// Animation Loading Screen
const loadingScreen = document.querySelector('.loading-screen');
let waitingLoading = window.setTimeout(animation, 1500);
function animation(){
    loadingScreen.style.marginLeft = '-500px';
}

// Boutons Footer
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

// API //
const localisation = require('geolocation');
const deuxVergesPosition = [
    44.8,
    2.9667
]

localisation.getCurrentPosition((err, position) => {
  if (err) throw err
  fetch(`https://api.meteo-concept.com/api/forecast/nextHours?token=${token}&latlng=${deuxVergesPosition[0]}%2C${deuxVergesPosition[1]}&hourly=true`)
  .then(res => res.json())
  .then(json => firstChart(json))
})

const token = '2bb58aceddb0cb94943a7226864991914f2a61f093db1a90e68f5c6533770fe0';

const searchBar = document.querySelector('.search-bar');
const search = document.querySelector('.search');
const annuler = document.querySelector('.annuler');
const rechercher = document.querySelector('.rechercher');
const results = document.querySelector('.results');
const pourcent = document.querySelector('.chart-pourcent-texte');

function apiRechercher(){
    results.innerHTML = "";
    fetch(`https://api.meteo-concept.com/api/location/cities?token=${token}&search=${searchBar.value}`)
    .then(res => res.json())
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
        city.textContent = name;
        city.addEventListener('click', () => {
            fetch(`https://api.meteo-concept.com/api/forecast/nextHours?token=${token}&latlng=${lat}%2C${long}&insee=${insee}&hourly=true`)
            .then(res => res.json())
            .then(json => clickCity(json))
            searchBar.style.backgroundColor = '#A4C8FF';
            searchBar.style.color = '#FFFFFF';
            searchBar.style.backgroundImage = 'url(./assets/images/search.png)';
            search.style.height = '0%';
            annuler.style.display = 'none';
            rechercher.style.display = 'none';
            searchBar.placeholder = name;
            searchBar.value = '';
        })
        results.append(city);
    })
}

function clickCity(json){
    const pourcentage = json.forecast[0].probarain += "%";
    chartBuild( json.forecast[0].datetime.slice(11,16), json.forecast[0].rr10, json.forecast[1].datetime.slice(11,16), json.forecast[1].rr10, json.forecast[2].datetime.slice(11,16), json.forecast[2].rr10, json.forecast[3].datetime.slice(11,16), json.forecast[3].rr10, json.forecast[4].datetime.slice(11,16), json.forecast[4].rr10)
    pourcent.innerHTML = pourcentage;
}

let lat;
let long;
let insee;

function getPosition(item){
    lat = item.latitude;
    long = item.longitude;
    insee = item.insee;
}

// Chart
let chart;
let build = true;
let graph;
function chartBuild( h1, t1, h2, t2, h3, t3, h4, t4, h5, t5 ){
    chart = [
        { heure: h1, pluie: t1 },
        { heure: h2, pluie: t2 },
        { heure: h3, pluie: t3 },
        { heure: h4, pluie: t4 },
        { heure: h5, pluie: t5 },
    ];
    if (build === false){
        graph.destroy();
    }
    graph = new Chart(
        document.getElementById('myChart'),
        {
        type: 'line',
        data: {
            labels: chart.map(row => row.heure),
            datasets: [{
                label: 'Précipitations en mm',
                data: chart.map(row => row.pluie),
                fill: false,
                borderColor: '#2A7FFF',
            }]
        },
        options: {
            scales: {
                x: {
                    grid: {
                        color: '#D7D7D7',
                    },
                    ticks: {
                        color: '#2A7FFF',
                    }
                },
                y: {
                    max: 3.5,
                    grid: {
                        display: false,
                    },
                    beginAtZero: true,
                    ticks: {
                        display: false,
                    }
                },
            },
            elements: {
                line: {
                    tension: 0.4,
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
                datalabels: {
                    display: false,
                },
            },
            maintainAspectRatio: false,
        }
    })
    build = false;
}
chartBuild();

// Search Bar Click Effects
searchBar.addEventListener('click', () => {
    search.style.height = '45%';
    annuler.style.display = 'flex';
    rechercher.style.display = 'flex';
})
annuler.addEventListener('click', () => {
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

// Time 1, 2, 3, 4, 5
const divTime = document.querySelector('.div-time');
const time1 = document.querySelector('.time-1');
const time2 = document.querySelector('.time-2');
const time3 = document.querySelector('.time-3');
const time4 = document.querySelector('.time-4');
const time5 = document.querySelector('.time-5');

time1.addEventListener('click', () => {
    divTime.style.left = '0%';
    time1.style.color = '#2A7FFF';
    time2.style.color = '#FFFFFF';
    time3.style.color = '#FFFFFF';
    time4.style.color = '#FFFFFF';
    time5.style.color = '#FFFFFF';
})
time2.addEventListener('click', () => {
    divTime.style.left = '20%';
    time1.style.color = '#FFFFFF';
    time2.style.color = '#2A7FFF';
    time3.style.color = '#FFFFFF';
    time4.style.color = '#FFFFFF';
    time5.style.color = '#FFFFFF';
})
time3.addEventListener('click', () => {
    divTime.style.left = '40%';
    time1.style.color = '#FFFFFF';
    time2.style.color = '#FFFFFF';
    time3.style.color = '#2A7FFF';
    time4.style.color = '#FFFFFF';
    time5.style.color = '#FFFFFF';
})
time4.addEventListener('click', () => {
    divTime.style.left = '60%';
    time1.style.color = '#FFFFFF';
    time2.style.color = '#FFFFFF';
    time3.style.color = '#FFFFFF';
    time4.style.color = '#2A7FFF';
    time5.style.color = '#FFFFFF';
})
time5.addEventListener('click', () => {
    divTime.style.left = '80%';
    time1.style.color = '#FFFFFF';
    time2.style.color = '#FFFFFF';
    time3.style.color = '#FFFFFF';
    time4.style.color = '#FFFFFF';
    time5.style.color = '#2A7FFF';
})

// Heure Map
const heureMap = document.querySelector('.heure-map');
let date;
window.setInterval( () => {
    date = new Date();
    heureMap.textContent = `${date.getHours()}:${date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes()}`
} , 1000);

function firstChart(json){
    chartBuild( json.forecast[0].datetime.slice(11,16), json.forecast[0].rr10, json.forecast[1].datetime.slice(11,16), json.forecast[1].rr10, json.forecast[2].datetime.slice(11,16), json.forecast[2].rr10, json.forecast[3].datetime.slice(11,16), json.forecast[3].rr10, json.forecast[4].datetime.slice(11,16), json.forecast[4].rr10, json.forecast[0].probarain, json.forecast[1].probarain, json.forecast[2].probarain, json.forecast[3].probarain, json.forecast[4].probarain );
    searchBar.placeholder = json.city.name;
    console.log(json);
    const pourcentage = json.forecast[0].probarain += "%";
    pourcent.innerHTML = pourcentage;
}