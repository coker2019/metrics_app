import { createSlice } from '@reduxjs/toolkit';

const mockCountries = [
  {
    name: 'France',
    flag: 'blue-white-red',
    population: 67000000,
    region: 'Western Europe',
    id: 1,
  },
  {
    name: 'Germany',
    flag: 'black-red-yellow',
    population: 83000000,
    region: 'Western Europe',
    id: 2,
  },
  {
    name: 'Spain',
    flag: 'red-yellow-red',
    population: 47000000,
    region: 'Western Europe',
    id: 3,
  },
];

const initialState = {
  countriesData: mockCountries,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
});

export default countriesSlice.reducer;
