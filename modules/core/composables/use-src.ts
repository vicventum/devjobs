type ImgFiles = {
	[key: string]: { default: string }
}

export function useSrc(url: string): string {
	// const imgFiles: ImgFiles = import.meta.globEager('@/assets/img/**')
	// return imgFiles[url].default || ''
	return url
}