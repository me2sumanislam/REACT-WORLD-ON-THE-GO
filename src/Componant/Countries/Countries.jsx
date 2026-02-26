import React, { use } from 'react';
import Country from '../country/Country';
import './Countries.css'
const Countries = ({ contriesPromise }) => {
    const countriesData = use(contriesPromise);
    const countries = countriesData.countries;

    //  console.log(countries)





    return (
        <div >
            <h2>Country:{countries.length}</h2>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;