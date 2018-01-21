import css from 'styled-jsx/css'

export default css`
	button {
		position: relative;
		cursor: pointer;
		font-size: 0.9rem;
		font-weight: bold;
		text-transform: uppercase;
		background-color: #eee;
		border: solid 3px #444;
		color: #444;
		line-height: 2.5;
		padding: 0px 15px;
		transition: all 0.4s ease-out 0s;
	}

	button:hover {
		background-color: #444;
		color: #fff;
	}
`