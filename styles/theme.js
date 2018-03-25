const font = {
	base: 16,
	ratio: 1.333
}

const space = {
	base: 16,
	ratio: 2
}

let getVal = (number, power, units) => parseFloat((number ** power).toPrecision(3)) + units

export default {
	color: {
		white: "#fef7f9",
	},
	font: {
		family: {
			roboto: 'Roboto, Arial, sans-serif',
			bangers: 'Bangers, cursive, sans-serif'
		},
		lineHeight: 1.45,
		size: {
			base: `${font.base}px`,
			miniscule: getVal(font.ratio, -3, 'rem'),
			tiny: getVal(font.ratio, -2, 'rem'),
			small: getVal(font.ratio, -1, 'rem'),
			medium: getVal(font.ratio, 0, 'rem'),
			large: getVal(font.ratio, 1, 'rem'),
			huge: getVal(font.ratio, 2, 'rem'),
			gigantic: getVal(font.ratio, 3, 'rem'),
			enormous: getVal(font.ratio, 4, 'rem')
		}
	},
	space: {
		miniscule: `${space.base / (space.ratio ** 3)}px`,
		tiny: `${space.base / (space.ratio ** 2)}px`,
		small: `${space.base / space.ratio}px`,
		medium: `${space.base}px`,
		large: `${space.base * space.ratio}px`,
		huge: `${space.base * (space.ratio ** 2)}px`,
		gigantic: `${space.base * (space.ratio ** 3)}px`,
		enormous: `${space.base * (space.ratio ** 4)}px`
	},
	mixins: {
		pseudo:  (content = "''") => {
			return `
				content: ${content};
				display: block;
			`
		},
		
		position: (type = 'relative', top, left, bottom, right) => {
			return `
				position: ${type};
				${top && 'top: ' + top + ';'}
				${left && 'left: ' + left + ';'}
				${bottom && 'bottom: ' + bottom + ';'}
				${right && 'right: ' + right + ';'}
			`
		},
		
		size: (width = '100%', height) => {
			if(!height) height = width
			return `
				width: 100%;
				${width && 'width: ' + width + ';'};
				${height && 'height: ' + height + ';'};
			`
		}
	}
	
}