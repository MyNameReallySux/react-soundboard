import { makeStyle } from 'components/AudioButton'

const Fragment = React.Fragment

export default class AudioButton extends React.Component {
	state = {
		label: this.props.label,
		audioFile: undefined,
		playing: false
	}

	handleClick = (e) => {
		let {playing} = this.state
		playing ? this.stop() : this.play()
	}

	play = () => {
		let {audioFile} = this.state
		if(audioFile && audioFile.play){
			this.setState({
				playing: true
			})
			audioFile.play()
		}
	}

	stop = () => {
		let {audioFile} = this.state
		audioFile.pause()
		audioFile.currentTime = 0
		this.setState({
			playing: false
		})
	}

	componentWillMount = () => {
		let {url} = this.props
		if(url) {
			let audioFile = new Audio(url)
			audioFile.addEventListener('ended', (e) => {
				this.stop()
			})
			this.state.audioFile = audioFile || ''
		}
	}

	render = () => {
		let { label, playing } = this.state
		let style = makeStyle(this.props)
		return (
			<Fragment>
				<button data-playing={playing} onClick={this.handleClick}>
					<div className='audio-button__progress'></div>
					{ label }
				</button>
				<style jsx>{style}</style>
			</Fragment>
		)
	}
}
