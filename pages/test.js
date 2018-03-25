import { AsyncContent, AsyncImage, Placeholder, Message } from 'components/AsyncMedia'

const Fragment = React.Fragment

const toDataObject = (src, naturalSize) => ({ src, naturalSize })

export default class Test extends React.Component {
	static data = [
		toDataObject('https://images.pexels.com/photos/39396/hourglass-time-hours-sand-39396.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb', '995x750'),
		toDataObject('https://images.pexels.com/photos/280264/pexels-photo-280264.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb', '1120x750'),
		toDataObject('https://images.pexels.com/photos/404972/pexels-photo-404972.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb', '1023x750'),
		toDataObject('https://images.pexels.com/photos/100733/pexels-photo-100733.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb', '1260x709'),
		toDataObject('https://images.pexels.com/photos/745365/pexels-photo-745365.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb', '1128x750')
	]

	render = () => {

		return (
			<Fragment>
				{/* <AsyncContent src='/static/svgs/beautiful-code-logo.svg'></AsyncContent> */}
				<div className='grid'>
					<AsyncImage src={Test.data[0].src} 
							naturalSize={Test.data[0].naturalSize} />
					{/* {Test.data.map((item, i) => 
						<AsyncImage key={i} src={item.src} 
							naturalSize={item.naturalSize} />
					)} */}
				</div>
				<style dangerouslySetInnerHTML={{__html: `
					.grid {
						display: grid;
						grid-template-columns: repeat(3, 1fr);
					}`
				}}/>
			</Fragment>
		)
	}
	
}