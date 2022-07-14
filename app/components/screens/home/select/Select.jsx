import Select from 'react-select'
import classes from './Select.module.scss'
import { useState } from 'react'

const options = [
	{ value: 'Africa', label: 'Africa' },
	{ value: 'America', label: 'America' },
	{ value: 'Asia', label: 'Asia' },
	{ value: 'Europa', label: 'Europa' },
	{ value: 'Oceania', label: 'Oceania' }
]

const customStyles = {
	control: (provided) => ({
		...provided,
		background: 'hsl(0, 0%, 100%)',
		border: 'none',
		outline: 'none',
		boxShadow: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px',
		height: '45px'
	}),
	option: (provided, state) => ({
		...provided,
		cursor: 'pointer',
		padding: '10px',
		color: 'hsl(200, 15%, 8%)',
		background: 'hsl(0, 0%, 100%)'
	})
}

const CustomSelect = ({setRegion}) => {
	return (
		<Select instanceId='selectbox' className={classes.select} options={options} styles={customStyles} width='200px'
		        placeholder={'Filter by region'} onChange={setRegion} />
	)
}

export default CustomSelect
