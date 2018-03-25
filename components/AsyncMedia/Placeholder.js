import PropTypes from 'prop-types'
import { Message } from './'

export default class Placeholder extends React.Component {
	constructor(props){
		super(props)

		let { ratio, height, width, naturalSize } = props
		if(!naturalSize){
			naturalSize = { height, width, ratio }
		}
		if(!naturalSize.ratio){
			naturalSize = this.formatNaturalSize(props.naturalSize)
		}
		
		this.state = {
			naturalSize
		}
	}

	render = () => {
		let { children, container, } = this.props

		let Container = container

		return (
			<Container className={this.getClassName()} style={this.getContainerStyle()}>
				<div style={this.getStyle()}>
					<Message>{children}</Message>
				</div>
			</Container>
		)
	}

	getClassName = () => this.props.className ? `${this.props.className} placeholder` : `placeholder`

	getContainerStyle = () => {
		let { ratio } = this.state.naturalSize
		let style = {
			paddingBottom: ratio ? `${ratio * 100}%` : undefined,
		}
		return Object.assign({}, Placeholder.defaultContainerStyle, style)
	}

	getStyle = () => {
		let { style } = this.props
		return Object.assign({}, Placeholder.defaultStyle, style)
	}

	formatNaturalSize = (naturalSize) => {
		if(naturalSize){
			let height, width
			if(typeof naturalSize == 'string'){
				naturalSize = naturalSize.replace(/ /g, '').split('x')
			}
			if(Array.isArray(naturalSize)){
				([height, width] = naturalSize)
				naturalSize = { height, width }
			}
	
			naturalSize.ratio = width / height
	
			return naturalSize
		} else {
			return {}
		}
		
	}

	static defaultContainerStyle = {
		position: 'relative',
		display: 'block',
		backgroundColor: '#eee',
		color: '#444',
	}

	static defaultStyle = {
		position: 'absolute',
		left: 0,
		top: 0,
		width: '100%',
		height: '100%'
	}

	static defaultProps = {
		container: 'div',
		naturalSize: undefined,
		type: 'absolute',
		opacity: 1,

		style: {}
	}

	static propTypes = {
		type: PropTypes.oneOf(['auto','responsive','absolute']),
		opacity: PropTypes.number,
		container: PropTypes.string,
		naturalSize: PropTypes.oneOfType([
			(props, propName, componentName) => {
				let value = props[propName]
				if(value){
					let dimensionPattern = /^([0-9]{1,4})(x| x )([0-9]{1,4})$/g
					let isDimension = dimensionPattern.test(value)
					if(!isDimension) 
						return new Error(`Invalid prop ${propName} supplied to ${componentName}. Must be a valid object or dimension string (eg.'100x100')`)
				}
				
			},
			PropTypes.shape({
				height: PropTypes.number,
				width: PropTypes.number,
				ratio: PropTypes.number
			})
		])
	}
}