const Home = () => {
    return(
    `
        <div class="main">
            <div class="body-home">
                <input class="search-bar" placeholder="Rechercher">
                <div class="search">
                    <div class="results"></div>
                    <div class="buttons">
                        <div class="annuler"></div>
                        <div class="rechercher"></div>
                    </div>
                </div>
            </div>
            <div class="map-home"></div>
        </div>
    `
    )
}

export default Home