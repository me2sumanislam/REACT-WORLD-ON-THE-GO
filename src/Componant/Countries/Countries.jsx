 import React, { use } from 'react';
 import Country from '../country/Country';
 
 const Countries = ({contriesPromise}) => {
 const countriesData = use( contriesPromise);
 const countries = countriesData.countries;
 
//  console.log(countries)



  

    return (
        <div>
           <h2>Country:{countries.length}</h2>
           {
            countries.map(country => <Country country = {country}></Country>)
           }
        </div>
    );
 };
 
 export default Countries;