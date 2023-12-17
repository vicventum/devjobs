export default function useGetFirstLetter(text: string): string {
	if (!text) return ''
	// Utilizando una expresión regular para encontrar la primera letra visible en el texto
	const firstLetter = text.match(/\p{L}/u)?.[0] // Utiliza la propiedad \p{L} para identificar letras Unicode

	return firstLetter?.toUpperCase() || ''
}
