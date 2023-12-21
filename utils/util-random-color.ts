import type { HexadecimalColor } from '@/types'

const COLORS: HexadecimalColor[] = [
	'#E91E63',
	'#9C27B0',
	'#009688',
	'#FFC107',
	'#FF7043',
	'#3F51B5',
]

export default function utilRandomColor(): HexadecimalColor {
	// Obtener un índice aleatorio dentro del rango de la longitud del array COLORS
	const randomColor = Math.floor(Math.random() * COLORS.length)

	// Devolver el color correspondiente al índice aleatorio obtenido
	return COLORS[randomColor]
}
