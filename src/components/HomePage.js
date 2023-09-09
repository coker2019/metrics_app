// eslint-disable-next-line react-hooks/exhaustive-deps
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCountries,
} from '../redux/countries/countriesSlice';
import Countries from './Countries';
import europe from '../images/europe.png';

const Home = () => {
  const [countryName, searchCountryName] = useState('');
  const dispatch = useDispatch();
  const countriesArr = useSelector((state) => state.countries.countriesData);
  // eslint-disable-next-line max-len
  const filteredData = countriesArr.filter((country) => country.name.toLowerCase().includes(countryName.toLowerCase()));

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleClick = () => {
    window.location.reload();
  };

  return (
    <main>
      <section>
        <div className="headline-sec">
          <img src={europe} alt="europe Map" className="europe-map" />
          <div className="title">
            <h3>Europe</h3>
            <p>742,272,652 Million</p>
            <div className="search">
              <input
                type="text"
                placeholder="country name"
                value={countryName}
                onChange={(e) => searchCountryName(e.target.value)}
              />
              <button type="button" onClick={handleClick}>
                Clear
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="country-section-title">See All Countries</h3>
        <Countries countriesArr={filteredData} />
      </section>
    </main>
  );
};

export default Home;
