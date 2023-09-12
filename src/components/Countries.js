import React from 'react';
import { PropTypes } from 'prop-types';

import Country from './Country';

const Countries = ({ countriesArr }) => (
  <div>
    <div className="grid-container">
      {
          countriesArr.map((country, index) => (
            <Country
              key={country.id}
              index={index}
              name={country.name}
              flag={country.image}
              region={country.subregion}
              population={country.population}
              id={country.id}
              languages={country.languages}
              capital={country.capital}
              timezone={country.timezone}
            />
          ))
        }
    </div>
  </div>
);

Countries.propTypes = {
  countriesArr: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Countries;
