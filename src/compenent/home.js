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
            </div>
            <div class="map-home"></div>
        </div>
    `
    )
}

export default Home