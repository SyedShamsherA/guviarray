fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
    //a. countries from Asia continent using filter function
    const countriesInAsia = data.filter(country => country.region === 'Asia');
    console.log(countriesInAsia);

    //b. countries with population less than 2 lakh
    const population = data.filter(country => country.population < 200000)
    console.log(population)

    //c. print name, capital, and flag using forEach function
    data.forEach(country => {
        console.log('Name :', country.name.common)
        console.log('Capital :', country.capital)
        console.log('Flag :', country.flags.png)
    })

    //d. total population of countries using reduce function
    const totalPopulation = data.reduce ((acc, country) => acc + country, 0);
    console.log(totalPopulation);
    
    //e. countries that uses US dollar as currency
    const dollar = data.filter(country => {
        const currencies = Object.values(country.currencies)
        return currencies.includes('USD')
    })
    console.log(dollar)
})
.catch(error => console.log(error))