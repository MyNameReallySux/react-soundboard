import dynamic from 'next/dynamic'

export const AsyncAudioButton = dynamic(
	import('components/AudioButton'), { 
		ssr: false
	}
)