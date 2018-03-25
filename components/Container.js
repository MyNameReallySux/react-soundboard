import css from 'styled-jsx/css'
import theme from 'styles/theme'

const Fragment = React.Fragment

const Container = (props) => {
	let className = `
		container${props.theme ? ` ${(props.theme)}` : ''}`
	return (
		<Fragment>
			<div className={className}>
				{props.children}
			</div>
			<style jsx>{`
				.container {
					max-width: 1140px;
					margin: 0px auto;
				}
			`}</style>
		</Fragment>
	)
}

export { Container }
export default Container