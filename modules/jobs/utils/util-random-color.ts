import type { HexadecimalColor } from '@/modules/core/types'

const COLORS: HexadecimalColor[] = [
	'#E91E63',
	'#9C27B0',
	'#009688',
	'#FFC107',
	'#FF7043',
	'#039BE5',
] as const

export function utilRandomColor(): HexadecimalColor {
	// Obtener un índice aleatorio dentro del rango de la longitud del array COLORS
	const indexRandomColor: number = Math.floor(Math.random() * COLORS.length)

	return COLORS[indexRandomColor]
}
