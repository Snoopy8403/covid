import { loadCovidData } from "./covid";


export const initForm = () => { 
    const form = document.getElementById('covid-form');
    const countryInput = document.getElementById('country-input');
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
        const covidData =  await loadCovidData(country);
        console.log(covidData);
    })
}