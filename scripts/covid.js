export const loadCovidData = async (country) => {
    try {
        let covidOBJ = {
            cases: await getCovidDataCases(country),
            vaccines: await getCovidDataByVaccines(country)
        }            
        console.log('mindenadat', covidOBJ);
        return covidOBJ;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const getCovidDataCases = async (country) => {
    const response = await fetch(`https://europe-central2-webuni-js-covid-exam.cloudfunctions.net/cases?country=${country}`);
    const body = await response.json();
    return body;
}

const getCovidDataByVaccines = async (country) =>{
    const response = await fetch(`https://europe-central2-webuni-js-covid-exam.cloudfunctions.net/vaccines?country=${country}`);
    const body = await response.json();
    return body;
}