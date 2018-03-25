import PropTypes from 'prop-types'
import { polyfill } from 'es6-promise'
polyfill()

import 'isomorphic-fetch'

const Fragment = React.Fragment

export default class AsyncContent extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			src: this.convertToAbsoluteUrl(props.src),
			loading: true, 
			onContentReceived: props.onContentReceived
		}
	}

	convertToAbsoluteUrl = (url) => {
		let base = 'http://localhost:3000'
		if(url.indexOf('/') > 0) url = `/${url}`
		return `${base}${url}`

	}

	componentDidMount = async () => {
		try {
			const res = await fetch(this.state.src, {
				headers: {
					'Content-Type': this.state.mime
				}
			})
			let content = await res.text()
	
			this.setState({
				...this.state, loading: false, content
			})
		} catch (error){
			this.setState({
				...this.state, loading: false, error
			})
		}
	}

	render = () => {
		if(this.state.loading){
			return (
				<Fragment>
					loading...
				</Fragment>
			)
		} else if (!this.state.content){
			return (
				<Fragment>
					No Data.
				</Fragment>
			)
		} else {
			return (
				this.props.onContentReceived(this.state.content)
			)
		}
	}

	static defaultProps = {
		src: '',
		mime: 'image/svg+xml',
		onContentReceived: (content) => {
			return <div dangerouslySetInnerHTML={{__html: content}}></div>;
		}
		
	}

	static propTypes = {
		src: PropTypes.string.isRequired,
		onContentReceived: PropTypes.func
		// mime: (props, propName, componentName) => {
		// 	let pattern = /([a-z]{1,127})\/([a-z\+\.\-]{1,127})/g
		// 	let isValid = props[propName] === undefined || pattern.match(props[propName])
		// 	if(!isValid) return new Error(`Invalid prop '${propName}' supplied to '${componentName}', must be a valid MIME type. (eg. image/svg+xml)`)

		// }
	}
}