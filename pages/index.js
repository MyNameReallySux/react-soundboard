import { AsyncSoundboard } from 'components/Soundboard'
import { Container } from 'components/Container'
import { loadFonts } from 'components/Fonts'
import globalStyle from 'styles/global'

import { loadSVG } from 'libs/async-media'

const asObject = (label, url) => { 
	return { label, url }
}

export default class Index extends React.Component {
	state = {
		theme: 'flat'
	}

	componentDidMount = () => {
		loadFonts()
		loadSVG()
	}
	render = () => (
		<div className={this.state.theme}>
			<div data-svg='/static/svgs/beautiful-code-logo.svg'></div>
			<Container>
				<h1>Mel's Soundboard</h1>
				<AsyncSoundboard
					buttons={[{
						title: "",
						items: [
							asObject("Fuck Off", "/static/audio/fuck-off.m4a"),
							asObject("No One Asked Karen", "/static/audio/no-one-cares-karen.m4a"),
							asObject("Who Are You, Patricia?", "/static/audio/who-are-you-patricia.m4a"),
							asObject("Eff Off (Gordon Ramsey)", "/static/audio/eff-off-gordon-ramsey.m4a"),
							asObject("I'm Recording", "/static/audio/im-recording-right-now.m4a"),
							asObject("Sup Bitches", "/static/audio/sup-bitches.m4a"),
							asObject("I Never Ask For Anything", "/static/audio/never-ask-for-anything.m4a"),
							asObject("Living For It", "/static/audio/living-for-it.m4a"),
							asObject("Cheese Puffs", "/static/audio/cheese-puffs.m4a"),
							asObject("Secret", "/static/audio/secret.m4a")
						]
					}]
				}/>
				<style jsx global>{globalStyle}</style>
			</Container>
		</div>
	)
}