import { polyfill } from 'es6-promise'
polyfill()

import 'isomorphic-fetch'

export default class MediaLoader {
	static loadImage = () => {
	
	}

	static loadSVG = () => {
		const $svgs = document.querySelectorAll('[data-svg]')
	
		Array.from($svgs).forEach(async ($svg) => {
			let src = $svg.getAttribute('data-svg')
			try {
				const response = await fetch(src, {
					headers: {
						'Content-Type': 'image/svg+xml'
					}
				})
				const svgContent = await response.text()
				$svg.insertAdjacentHTML('beforeend', svgContent)
			} catch (err){
				console.error(err)
			}
			
		})
	}
}

const { loadImage, loadSVG } = MediaLoader

export { 
	MediaLoader, 
	loadImage, loadSVG 
}