export const selectStyles = (width) => ({
	menu: (base) => ({
		...base,
		marginTop: 0,
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
		borderTop: 'none',
		borderLeft: '1px solid #be2bbb',
		borderRight: '1px solid #be2bbb',
		borderBottom: '1px solid #be2bbb',
	}),
	control: (base) => ({
		...base,
		borderColor: '#be2bbb !important',
		borderWidth: 1,
		borderRadius: 0,
		width,
	}),
	option: (base, state) => ({
		...base,
		color: '#595454',
		background: state.isSelected ? '#be2bbb20' : 'none',
        fontSize: 12
	}),
	menuList: (base) => ({
		...base,
		padding: 0,
	}),
	svg: (base) => ({
		...base,
		fill: '#be2bbb !important',
		stroke: '#be2bbb !important',
	}),
	input: (base) => ({
		...base,
		color: '#595454',
	}),
	singleValue: (base) => ({
		...base,
		color: '#595454',
	}),
})

export const typesCalculator = [
    {label: 'Dexametasona', value: 'Dexametasona'},
    {label: 'Metilprednisolona', value: 'Metilprednisolona'},
    {label: 'Prednisona', value: 'Prednisona'},
    {label: 'Prednisolona', value: 'Prednisolona'},
]

export const dosisCalculator = [
    {label: '0.5', value: '0.5'},
    {label: '1', value: '1'},
    {label: '2', value: '2'},
]

export const adminCalculator = [
    {label: 'Intravenosa', value: 'Intravenosa'},
    {label: 'Vía oral', value: 'Vía oral'},
]