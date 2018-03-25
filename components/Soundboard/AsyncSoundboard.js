import dynamic from 'next/dynamic'

export const AsyncSoundboard= dynamic(
	import('components/Soundboard'), { 
		ssr: false
	}
)