import theme from './theme'

export default {
	fontSize: theme.font.size.small,
	lineHeight: 1.25,

	bgColor: '#eee',
	textColor: '#444',

	mixins: {
		button: (color, thickness = '5px', radius = '5px') => {
			return `
				position: relative;
				top: -${thickness};
				border-radius: ${radius};
				border: solid 1px;
				box-shadow: 0 ${thickness} ${color};	`
		},

		buttonAction: (color, thickness = '3px') => {
			return `
				top: -${thickness};
				box-shadow: 0 ${thickness} ${color};
			`
		},

		buttonHighlight: () => {
			return `
				filter: brightness(1.1);
			`
		}
	}
}