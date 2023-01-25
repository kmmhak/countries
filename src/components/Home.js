import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Table from './Table';

function Home() {

    const [countries, setCountries] = useState(null);

    useEffect(() => {
    axios
        .get(`https://restcountries.com/v3.1/all`)
        .then(function (response) {
            setCountries([response.data])
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []);

    return (
        <>
            <Navbar />
            <Table countries={countries}/>
        </>
    )
}

export default Home;