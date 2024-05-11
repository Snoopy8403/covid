import { addCard } from "./card";
import { loadCovidData } from "./covid";


export const initForm = () => { 
    const form = document.getElementById('covid-form');
    const countryInput = document.getElementById('country-input');
    const cardsContainer = document.getElementById('card-container');
    let displayedCountry = [];
    const countryList = [
        'Hungary',
        'France', 
        'Slovakia', 
        'Slovenia', 
        'Austria', 
        'Romania' 
    ];

    for (let i = 0; i < countryList.length; i++) {
        let option = document.createElement("option");
        option.text = countryList[i];
        option.value = countryList[i].toLowerCase();
        countryInput.appendChild(option);
    }

    form.addEventListener('submit', async e => {
        e.preventDefault();
        const country = document.getElementById('country-input').value;
        const message = document.getElementById('message');
        cardsContainer.insertAdjacentHTML('afterbegin', '<div id="loading-indicator" class="lds-dual-ring"></div>');
        try {
            const covidData =  await loadCovidData(country);
            let index = displayedCountry.indexOf(country);
            if (index == -1) {
                displayedCountry.push(country);
                addCard(covidData);
            } else {
                message.style.display = 'block';
                message.innerHTML = `
                    <div class="info">This information has been downloaded!</div>
                `;
                setTimeout(() =>  message.style.display = 'none', 2000);
            }
        } catch (error) {
            message.style.display = 'block';
            message.innerHTML = `
                <div class="error">${error}</div>
            `;
            setTimeout(() =>  message.style.display = 'none', 2000);
        } finally {
            cardsContainer.removeChild(document.getElementById('loading-indicator'));
        }
    })
}