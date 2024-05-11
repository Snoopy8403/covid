import 'zizi-card';

export const addCard = (covidData) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.insertAdjacentHTML('afterbegin',`
        <zizi-card title="${covidData.country}">
            <div class="card-content">
                <div>Continent: ${covidData.continent}</div>
                <div>Location: ${covidData.location}, ${covidData.lat} - ${covidData.long}</div>    
                <div>Elevation: ${covidData.elevation_in_meters}m, Area: ${covidData.sq_km_area}km²</div>
                <div>Capital city: ${covidData.capital_city}</div>
                <div>Abbreviation: ${covidData.abbreviation}</div>
                <div>Population: ${covidData.population}</div>
                <div>Life expectary: ${covidData.life_expectancy}</div>
                <div>Confirmed: ${covidData.confirmed}</div>
                <div>Deaths: ${covidData.deaths}</div>
                <div>Isolated: ${covidData.iso}</div>
                <div>Recovered: ${covidData.recovered}</div>
             </div>
             <div class="card-footer">Last updated: ${covidData.updated}</div>    
        </zizi-card>
    `);
}