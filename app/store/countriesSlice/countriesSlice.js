import { createSlice } from '@reduxjs/toolkit'

const countriesSlice = createSlice({
	name: 'countries',
	initialState: {
		countries: [],
		filteredCountries: []
	},
	reducers: {
		setCountries(state, { payload }) {
			state.countries = payload.data
		},
		setFilteredCountries(state, { payload }) {
			state.filteredCountries = payload.data
		}
	}
})

export const { setCountries, setFilteredCountries } = countriesSlice.actions
export default countriesSlice.reducer