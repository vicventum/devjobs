export function utilGetFirstLetter(text: string): string {
	// return text[0]
	if (!text) return ''
	// Utilizando una expresión regular para encontrar la primera letra visible en el texto
	// ? Utiliza la propiedad \p{L} para identificar letras Unicode
	const firstLetter = text.match(/\p{L}/u)?.[0]

	return firstLetter?.toUpperCase() || ''
}
