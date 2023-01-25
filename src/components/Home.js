import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Table from './Table';

function Home() {

    const [countries, setCountries] = useState(null);
    const [fetchComplete, setfetchComplete] = useState(false)

    useEffect(() => {

    axios
        .get(`https://restcountries.com/v3.1/all`)
        .then(function (response) {
            if (response.data && response.data.length > 0) {
                let number = 0;
                const tabledata = []

                response.data.map((item) => {
                    let countryData = {};
                    countryData.flag = item.flags.png;
                    countryData.name = item.name.common;
                    countryData.region = item.region;
                    countryData.population = item.population;
                    countryData.languages = item.languages;
                    countryData.id = number;
                    number++
                    tabledata.push(countryData);
                    })
                    
                setCountries([tabledata])
                setfetchComplete(true);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []);


    if (fetchComplete) {
        return (
            <>
                <Navbar />
                <Table countries={countries[0]}/>
            </>
        )
    } else {
        return <h1>Loading...</h1>;
    }
    
}

export default Home;