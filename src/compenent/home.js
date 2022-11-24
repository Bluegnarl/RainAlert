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
                    <div class="chart">
                        <canvas id="myChart"></canvas>
                    </div>
                </div>
            </div>
            <div class="map-home"></div>
        </div>
    `
    )
}

export default Home