import countriesReducer, { fetchCountries, fetchCountry, initialState } from '../redux/countries/countriesSlice';

describe('countriesSlice', () => {
  it('should handle fetchCountries.fulfilled', () => {
    const action = {
      type: fetchCountries.fulfilled.type,
      payload: {
        countries: [{ name: 'Country 1' }, { name: 'Country 2' }],
      },
    };

    const newState = countriesReducer(initialState, action);

    // Add your assertions here based on the expected state changes
    expect(newState.countriesData).toEqual(action.payload.countries);
  });

  it('should handle fetchCountry.fulfilled', () => {
    const action = {
      type: fetchCountry.fulfilled.type,
      payload: [{ name: 'Country 1' }],
    };

    const newState = countriesReducer(initialState, action);

    // Add your assertions here based on the expected state changes
    expect(newState.countriesData).toEqual(action.payload);
  });
});
