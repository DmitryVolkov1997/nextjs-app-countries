import { createSlice } from '@reduxjs/toolkit'

const neighborsSlice = createSlice({
	name: 'search',
	initialState: {
		neighbors: []
	},
	reducers: {
		setNeighbors(state, { payload }) {
			state.neighbors = payload.data
		}
	}
})

export const { setNeighbors } = neighborsSlice.actions
export default neighborsSlice.reducer
