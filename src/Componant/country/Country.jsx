import React, { useState } from 'react';
import './Country.css'

const Country = ({ country }) => {
    // console.log(country.area.area)
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        //   setVisited(true);
        //   mathod-1
        // if(visited){
        //     setVisited(false)
        // }else{
        //     setVisited(true)
        // }
        // method-2
        // setVisited(visited? false : true)
        // method-3
        setVisited(!visited)
    }


    return (
        <div className = {` country  ${visited && 'country-visited'}`} >
            <img src={country.flags.flags.png} alt="" />
            <h3>Name:{country.name.common}</h3>
            <p>Capital:{country.capital.capital}</p>
            <p>Area:{country.area.area}
                {
                    country.area.area > 300000 ? "big Country" : 'small country'
            }

            </p>
        <button onClick={handleVisited}>
            {visited ? 'visited' : 'not visited'}
            </button>
        </div >
    );
};

export default Country;