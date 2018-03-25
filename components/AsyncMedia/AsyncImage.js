import PropTypes from 'prop-types'
import { polyfill } from 'es6-promise'
polyfill()

import 'isomorphic-fetch'
import { Placeholder } from '../AsyncMedia'

const Fragment = React.Fragment

const Status = {
	PENDING: 'pending',
	LOADING: 'loading',
	LOADED: 'loaded',
	TRANSITIONING: 'transitioning',
	FAILED: 'failed'
}

export default class AsyncImage extends React.Component {
	constructor(props){
		super(props)

		let { src, duration, naturalSize } = this.props
		let status = props.src ? Status.LOADING : Status.PENDING
		naturalSize = this.formatNaturalSize(naturalSize)

		let container = this.getContainerComponent(status)
		let image = this.getImageComponent(status, src, duration, naturalSize)
		let placeholder = this.getPlaceholderComponent(naturalSize)

		this.state = {
			status, naturalSize,

			placeholder, container, image,
		}
	}

	componentWillMount = () => {
	
	}

	componentDidMount = () => {
		console.log('mounted')
		if(this.preloader.complete) {
			this.setState({ status: Status.LOADING}, () => {
				this.handleLoad()
			})
			
		}
	}

	getContainerComponent = (status) => {
		return (props) => {
			let containerStyle = {
				position: 'relative',
			}

			return (
				<Conditional 
					type='span'
					condition={`${status != Status.LOADED}`} 
					style={containerStyle}>
					{props.children}
				</Conditional>
			)
		}
	}

	getImageComponent = (status, src, duration, naturalSize) => {
		let { width } = naturalSize
		return (props) => {
			let style = {
				width: '100%',
				maxWidth: width ? `${width}px` : undefined
			}
	
			if(status != Status.LOADED) {
				style = Object.assign({}, style, {
					position: 'absolute',
					top: 0,
					left: 0,
					zIndex: 2
				})
			}

			return (
				<img style={style} className={this.getClassName()} src={src} />
			)
		}
	}

	getPlaceholderComponent = (naturalSize) => {
		let { height, width, ratio } = naturalSize
		return (props) => {
			<Placeholder 
				className={this.className}
				height={height} width={width} ratio={ratio}
				responsive="true">
				{props.children}
			</Placeholder>
		}
		
	}

	componentDidUpdate = () => {
		
	}

	formatNaturalSize = (naturalSize) => {
		if(naturalSize){
			let height, width
			if(typeof naturalSize == 'string'){
				naturalSize = naturalSize.split('x')
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

	getClassName = () => {
		let className = `image image-${this.state.status}`
		if(this.props.className) className = `${className} ${this.props.className}`
		return className
	}

	handleLoad = () => {
		if(this.state.status == Status.LOADING){
			setTimeout(() => {
				this.setState({ status: Status.TRANSITIONING }, () => {
					setTimeout(() => {
						this.setState({ status: Status.LOADED })
					}, this.props.duration * 7000)
				})
			}, 4000)
			
			if(this.props.onLoad) this.props.onLoad(event)
		}
	}

	render = () => {
		let { src, responsive, duration, placeholder } = this.props
		let { status, naturalSize } = this.state
		let { height, width, ratio } = naturalSize

		let Placeholder = this.state.placeholder
		let Container = this.state.container
		let Image = this.state.image

		return (
			<Fragment>
				<style dangerouslySetInnerHTML={{__html: `
					.image {
						opacity: 0;
						transition: all ${duration}s ease 0s
					}

					.image.image-loaded {
						opacity: 1;
					}
				`}}/>
				{(status == Status.TRANSITIONING || status == Status.LOADED || status == Status.LOADING)
					&& <Container>
						<Image />
						{status != Status.LOADED && <Placeholder>Loading...</Placeholder>}
					</Container>
				}
				{status == Status.PENDING && <Placeholder>Waiting...</Placeholder>}

				{status != Status.LOADED && <div className='hidden' style={{
					display: 'none'
				}}>
					<img ref={(preloader) => this.preloader = preloader} src={src} onLoad={() => this.handleLoad()} />
				</div>}
			</Fragment>
		)
	}

	static defaultProps = {
		responsive: true,
		duration: 0.6,
		placeholder: Placeholder,
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

// const Placeholder = (props) => {
// 	let { responsive, width, ratio } = props
// 	let { children, ...childProps } = props

// 	responsive = mapStringToBoolean(responsive)

// 	let placeholderStyle = responsive
// 	? {
// 		position: 'relative',
// 		backgroundColor: '#eee',
// 		color: '#444',
// 		width: '100%',
// 		paddingBottom: ratio ? `${ratio * 100}%` : undefined
// 	}
// 	: {}
// 	return (
// 		<div {...childProps} className='placeholder' style={placeholderStyle}>
// 			{props.children}
// 		</div>
// 	)
// }

// let ImagePlaceholder = (props) => {
// 	let { width } = props
// 	let { children, ...childProps } = props
	
// 	let containerStyle = props.width ? {
// 		width: '100%',
// 		maxWidth: width ? `${width}px` : undefined
// 	} : {}

// 	return (
// 		<div style={containerStyle} className={props.className}>
// 			<Placeholder {...childProps}>
// 				<Message message={props.message} />
// 			</Placeholder>
// 		</div>
// 	)
// }

let Conditional = (props) => {
	let { condition, type } = props
	let { children, ...childProps } = props
	condition = mapStringToBoolean(condition)

	if(!condition) childProps = undefined

	return (
		<span {...childProps}>
			{children}
		</span>
	)
}

const mapStringToBoolean = (string) => string == 'true' ? true : false
