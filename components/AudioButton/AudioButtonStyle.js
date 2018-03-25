import css from 'styled-jsx/css'

import theme from 'styles/theme'
import comic from 'styles/comic'

let basic = {
	fontSize: theme.font.size.small,
	lineHeight: 1.25,

	bgColor: '#eee',
	textColor: '#444'
}

export default (props) => {
	return css`
		button {
			cursor: pointer;
			
			font-weight: bold;
			text-transform: uppercase;
			letter-spacing: 0.05em;
			
		}

		button > .progress {
			${theme.mixins.pseudo()}
			${theme.mixins.position('relative', '0px', '0px')}
			${theme.mixins.size()}

			background-color: red;
		}

		button:focus {
			outline: none;
		}

		:global(.comic) button {
			font-size: ${comic.fontSize};
			background-color: ${comic.bgColor};
			color: ${comic.textColor};

			${comic.mixins.button(comic.textColor)}
			line-height: ${comic.lineHeight};
			padding: ${theme.space.medium};
			transition: 
				filter 0.4s ease 0s,
				box-shadow 0.1s linear 0s,
				top 0.1s linear 0s;
		}

		:global(.comic) button:hover {
			${comic.mixins.button(comic.textColor)}
			${comic.mixins.buttonHighlight()}
		}

		:global(.comic) button[data-playing='true'] {
			${comic.mixins.buttonAction(comic.textColor)}
		}

		:global(.comic) button:active {
			${comic.mixins.buttonAction(comic.textColor, '0px')}
		}
	`
} 