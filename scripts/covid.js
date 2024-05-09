export const loadCovidData = async (country) => {
    try {
        return await getCovidData(country);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const getCovidData = async (country) => {
    const response = await fetch(`https://europe-central2-webuni-js-covid-exam.cloudfunctions.net/cases?country=${country}`);
    const body = await response.json();
    return body;
}