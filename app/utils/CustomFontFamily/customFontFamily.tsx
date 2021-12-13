import { Platform } from 'react-native'

interface Props {
	weight: any
	family: string
	familyIOS: string
}

const font: any = {
	GoogleSans: {
		weights: {
			Bold: '700',
			SemiBold: '600',
			Normal: '400',
		},
	},
	Battambang: {
		weights: {
			Regular: '400',
			Bold: '700',
		},
	},
}


const fontMaker = (options: any) => {
	// eslint-disable-next-line prefer-const
	let { weight, family, familyIOS }: Props = ({
		weight: '400',
		family: 'OpenSans',
		familyIOS: 'Open Sans',
		...options,
	})
	const { weights } = font[family]
	if (Platform.OS === 'android') {
		weight = weights[weight] ? weight : ''
		const suffix = weight
		return {
			fontFamily: family + (suffix.length ? `-${suffix}` : ''),
		}
	} else {
		weight = weights[weight] || weights.Normal
		return {
			fontFamily: familyIOS,
			fontWeight: weight,
		}
	}
}

export const fontLight = fontMaker({ weight: 'Light' })
export const fontNormal = fontMaker({ weight: 'Normal' })
export const fontSemiBold = fontMaker({ weight: 'SemiBold' })
export const fontBold = fontMaker({ weight: 'Bold' })
export const fontExtraBold = fontMaker({ weight: 'ExtraBold' })


export const Battambang = fontMaker({
	weight: 'Regular',
	family: 'Battambang',
	familyIOS: 'Battambang-Regular',
})
export const BattambangBold = fontMaker({
	weight: 'Bold',
	family: 'Battambang',
	familyIOS: 'Battambang-Bold',
})