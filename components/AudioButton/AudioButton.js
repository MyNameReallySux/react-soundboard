import style from 'styles/AudioButton'

const Fragment = React.Fragment

export default class AudioButton extends React.Component {
	state = {
		label: undefined,
		audioFile: undefined
	}

	play = (e) => {
		let { audioFile } = this.state
		if(audioFile && audioFile.play) 
			audioFile.play()

	}

	componentWillMount = () => {
		let { label, url } = this.props
		if(url) {
			let audioFile = new Audio(url)
			this.state.audioFile = audioFile || ''
		}
		if(label) {
			this.state.label = label
		}
	}

	static render = () => {
		let { label } = this.state
		return (
			<Fragment>
				<button onClick={this.play}>{ label }</button>
				<style jsx>{style}</style>
			</Fragment>
		)
	}

	render = () => {
		let { label } = this.state
		return (
			<Fragment>
				<button onClick={this.play}>{ label }</button>
				<style jsx>{style}</style>
			</Fragment>
		)
	}
}
