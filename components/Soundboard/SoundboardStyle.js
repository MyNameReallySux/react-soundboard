import css from 'styled-jsx/css'
import theme from 'styles/theme'


export default (props) => {
	let { columns } = props

	let gridGap = theme.space.small

	return css`
		:global(.soundboard__container) {
		}

		:global(.soundboard__container h2) {
			font-size: ${theme.font.size.large};
			font-family: ${theme.font.family.roboto};
			font-weight: bold;
			text-transform: uppercase;
		}

		:global(.soundboard__grid) {
			display: grid;
			grid-gap: ${theme.space.medium};
			grid-template-columns: repeat(${columns}, 1fr);
		}

		:global(.comic .soundboard__group + .soundboard__group:before){
			${theme.mixins.pseudo()};
			margin: ${theme.space.large} 0px;
		}

		:global(.comic .soundboard__grid) {	
			padding: 24px 16px 16px;
			border: solid 1px #444;
			border-radius: ${theme.font.size.small};
			box-shadow: inset 0px 4px 0px 0px #444;
			background-color: #f0fefe;
		}
	`
} 