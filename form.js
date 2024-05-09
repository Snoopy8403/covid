

export const initForm = () => { 

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
}