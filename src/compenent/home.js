const Home = () => {
    return(
    `
        <div class="main">
            <div class="body-home">
                <input class="search-bar" placeholder="Rechercher">
                <div class="search">
                    <div class="results"></div>
                    <div class="buttons">
                        <div class="annuler">Annuler</div>
                        <div class="rechercher">Rechercher</div>
                    </div>
                </div>
                <div class="meteo">
                    <div class="logo-meteo">
                        <div class="logo-meteo-1"></div>
                    </div>
                    <div class="text-meteo">
                        <div class="text-meteo-1">12°C</div>
                    </div>
                </div>
                <div class="graph">
                    <div class="chart-top">
                        <div class="chart-precip">Précipitations</div>
                        <div class="chart-top-right">
                            <div class="chart-fiabilite">Fiabilité</div>
                            <div class="chart-pourcent">
                                <div class="chart-pourcent-texte">20%</div>
                            </div>
                        </div>
                    </div>
                    <div class="chart-bot">
                        <div class="gouttes">
                            <div class="goutte-1">
                                <div class="goutte-img-1"></div>
                                <div class="goutte-txt-1">Fortes</div>
                            </div>
                            <div class="goutte-2">
                                <div class="goutte-img-2"></div>
                                <div class="goutte-txt-2">Moyennes</div>
                            </div>
                            <div class="goutte-3">
                                <div class="goutte-img-3"></div>
                                <div class="goutte-txt-3">Basses</div>
                            </div>
                        </div>
                        <div class="chart">
                            <canvas id="myChart"></canvas>
                        </div>
                    </div>
                </div>
                <div class="the-time">
                    <div class="div-time"></div>
                    <div class="time-1">15:00</div>
                    <div class="time-2">16:00</div>
                    <div class="time-3">17:00</div>
                    <div class="time-4">18:00</div>
                    <div class="time-5">19:00</div>
                </div>
            </div>
            <div class="map-home">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1672521.215237847!2d1.65653915762622!3d46.49012643934689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54a02933785731%3A0x6bfd3f96c747d9f7!2sFrance!5e0!3m2!1sfr!2sbe!4v1669900972368!5m2!1sfr!2sbe" style="border:0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div class="heure-map"></div>
            </div>
        </div>
    `
    )
}

export default Home