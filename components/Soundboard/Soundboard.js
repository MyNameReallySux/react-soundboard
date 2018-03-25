import PropTypes from 'prop-types'
import { makeStyle } from 'components/Soundboard'
import { AudioButton } from 'components/AudioButton'

const Fragment = React.Fragment

let i = 1

class Soundboard extends React.Component {
	state = {
		buttons: this.props.buttons,
		columns: this.props.columns,
		minWidth: this.props.minWidth,
	}

	static defaultProps = {
		buttons: [],
		columns: 5,
		minWidth: '300px'
	}

	static propTypes = {
		buttons: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.shape({
				url: PropTypes.string,
				label: PropTypes.string
			})),
			PropTypes.arrayOf(PropTypes.shape({
				title: PropTypes.string,
				items: PropTypes.arrayOf(PropTypes.shape({
					url: PropTypes.string,
					label: PropTypes.string
				}))
			}))
		]),
		columns: PropTypes.number,
		minWidth: PropTypes.string
	}

	componentWillMount = () => {
		
	}

	render = () => {
		let { buttons } = this.state
		let style = makeStyle(this.props)

		let renderSoundboardGroup = (list, title) => {
			return (
				<Fragment>
					<h2>{title}</h2>
					<div className='soundboard__grid'>
						{list && list.map((definition) =>
							<AudioButton key={definition.label} 
											label={definition.label} 
											url={definition.url}/>)}
					</div>
				</Fragment>
			)
		}

		let renderSoundboardGroups = (groups) => {
			return (
				<div className='soundboard__groups'>
					{groups && groups.map((schema) => {
						return (
							<div className='soundboard__group' key={schema.title}>
								{renderSoundboardGroup(schema.items, schema.title)}
							</div>
						)
					})}
				</div>
			)
		}

		let renderComponent = (data) => {
			if(data){
				if(Array.isArray(data)){
					return renderSoundboardGroups(data)
				} else if(typeof buttons == 'object'){
					return renderSoundboardGroups(data)
				}
			}
		}

		return (
			<Fragment>
				<div className='soundboard__container'>
					{renderComponent(buttons)}
					<style jsx>{style}</style>
				</div>
			</Fragment>
		)
	}
}

export default Soundboard