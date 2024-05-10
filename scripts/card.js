import 'zizi-card';

export const addCard = (covidData) => {
    console.log(covidData);

    const cardContainer = document.getElementById('card-container');

    cardContainer.insertAdjacentHTML('afterbegin',`
        <zizi-card title="${covidData.country}">
            <div class="card-content">
                <div>${covidData.capital_city}</div>
                <div>${covidData.abbreviation}</div>
             </div>    
        </zizi-card>
    `);
}