export function utilCheckResponseType<T>(resp: T, schema: any): T {
	try {
		const responseChecked: T = schema.parse(resp)
		// Los datos son válidos si no se ha lanzado una excepción hasta este punto
		// console.log('Datos válidos:', responseChecked)
		return responseChecked
	} catch (error) {
		// TODO: Indicar el tipo del error
		console.error('⚠ Error al validar los datos:', error)
		throw error
	}
}
