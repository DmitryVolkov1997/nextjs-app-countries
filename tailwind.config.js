module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Nunito Sans', 'sans-serif']
			},
			colors: {
				'dark-blue': 'hsl(200, 15%, 8%)',
				'light-gray': 'hsl(0, 0%, 98%)',
				'dark-gray': 'hsl(0, 0%, 100%)'
			}
		}
	},
	plugins: []
}
