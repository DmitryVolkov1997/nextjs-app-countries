import { createSlice } from '@reduxjs/toolkit'

const countriesSlice = createSlice({
	name: 'countries',
	initialState: {
		countries: []
	},
	reducers: {
		setCountries(state, { payload }) {
			state.countries = payload.data
		}
	}
})

export const {setCountries} = countriesSlice.actions
export default countriesSlice.reducer