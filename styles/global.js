import css from 'styled-jsx/css'
import theme from './theme'

export default css`
	.roboto {
		font-family: Roboto, Arial, sans-serif;
	}

	h1, h2, h3, h4, h5, h6 {
		margin: 0px;
		padding: 0px;
	}

	h1 + *, h2 + *, h3 + *,
	h4 + *, h5 + *, h6 + * {
		margin-top: ${theme.space.medium};
	}

	h1 {
		font-family: ${theme.font.family.roboto};
		font-size: ${theme.font.size.enormous};
	}

	h2 {
		font-family: ${theme.font.family.roboto};
		font-size: ${theme.font.size.enormous};
	}

	.flat .container {
		background-color: #f7f7f7;
		padding: ${theme.space.medium};
	}

	.flat button {
		position: relative;
		background-color: #A20002;
		border: none;
		color: white;
		padding: ${theme.space.small};
		transition: all 0.4s ease 0s;
	}

	.flat button:hover {
		filter: brightness(1.2);
	}

	.flat button .button__progress {

	}

	.comic h1  {
		font-family: ${theme.font.family.bangers};
		font-size: ${theme.font.size.enormous}
		letter-spacing: 0.05em;
	}

	.comic .container {
		border: solid 1px #444;
		border-bottom: solid 5px #444;
		border-radius: ${theme.space.small};
		padding: ${theme.space.medium}
	}
`