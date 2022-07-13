import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './searchSlice/searchSlice'
import countriesSlice from './countriesSlice/countriesSlice'

export const store = configureStore({
	reducer: {
		search: searchSlice,
		countries: countriesSlice
	}
})