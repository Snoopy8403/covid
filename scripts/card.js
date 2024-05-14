import 'zizi-card';

export const addCard = (covidData) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.insertAdjacentHTML('afterbegin',`
        <zizi-card title="${covidData.cases.country}" id="zizi-${covidData.cases.country}">
        <button class="closeBtn" id="btn" name="${covidData.cases.country}">X</button>
            <div class="card-content">
                <div>Continent: ${covidData.cases.continent}</div>
                <div>Location: ${covidData.cases.location}, ${covidData.cases.lat} - ${covidData.cases.long}</div>    
                <div>Elevation: ${covidData.cases.elevation_in_meters}m, Area: ${covidData.cases.sq_km_area}km²</div>
                <div>Capital city: ${covidData.cases.capital_city}</div>
                <div>Abbreviation: ${covidData.cases.abbreviation}</div>
                <div>Population: ${covidData.cases.population}</div>
                <div>Life expectary: ${covidData.cases.life_expectancy}</div>
                <h2>Cases</h2>
                <div>Confirmed: ${covidData.cases.confirmed}</div>
                <div>Deaths: ${covidData.cases.deaths}</div>
                <div>Isolated: ${covidData.cases.iso}</div>
                <div>Recovered: ${covidData.cases.recovered}</div>
                <h2>Vaccines</h2>
                <div>Administered: ${covidData.vaccines.administered}</div>
                <div>Vaccinated: ${covidData.vaccines.people_vaccinated}</div>
             </div>
             <div class="card-footer">Last updated: ${covidData.cases.updated}</div>    
        </zizi-card>        
    `);

    const gomb = document.getElementById('btn');
    gomb.addEventListener('click', function() {
        const selectedDiv = this.getAttribute('name');
        const divCard = document.getElementById('zizi-' + selectedDiv);
        divCard.remove();
      });
}