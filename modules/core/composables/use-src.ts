// type ImgFiles = {
// 	[key: string]: { default: string }
// }

export function useSrc(url: string): string {
	const imgFiles = import.meta.glob('@/assets/img/**', {
		eager: true,
		import: 'default',
	})
	return (imgFiles[url] as string) || ''
	// return url
}
