import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Table from './Table';

function Home() {

    const [countries, setCountries] = useState([]);
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
                    const rowData = {}
                    rowData.flag = item.flags.png;
                    rowData.name = item.name.common;
                    rowData.region = item.region;
                    rowData.population = item.population;
                    rowData.languages = item.languages;
                    countryData.items = rowData;
                    countryData.id = number;
                    number++
                    tabledata.push(countryData);
                    })
                setCountries(tabledata)
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
                <Table countries={countries}/>
            </>
        )
    } else {
        return <h1>Loading...</h1>;
    }
    
}

export default Home;