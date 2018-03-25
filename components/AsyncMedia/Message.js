export default class Message extends React.Component {
	constructor(props){
		super(props)
	}

	render = () => {
		let { container, children } = this.props

		let Container = container

		return (
			<Container className={this.getClassName()} style={this.getStyle()}>
				{children}
			</Container>
		)
	}

	getClassName = () => {
		let className = `message message-${this.props.type}`
		if(this.props.className) className = `${className} ${this.props.className}`
		return className
	}

	getStyle = () => {
		let { type, style } = this.props
		return Object.assign({}, Message.defaultStyle, style)
	}

	static defaultStyle = {
		fontSize: '2rem',
		fontWeight: 'bold',
		position: 'absolute',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		width: '100%'
	}

	static defaultProps = {
		container: 'span',
		type: 'center'
	}
}

// const Message = (props) => {
// 	let messageStyle = {
// 		fontSize: '2rem',
// 		fontWeight: 'bold',
// 		position: 'absolute',
// 		display: 'flex',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		height: '100%',
// 		width: '100%'
// 	}
// 	return (
// 		<span style={messageStyle}  className='message'>{props.message}</span>
// 	)	
// }