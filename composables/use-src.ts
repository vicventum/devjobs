interface ImgFiles {
	[key: string]: { default: string }
}

export default function (url: string): string | undefined {
	const imgFiles: ImgFiles = import.meta.globEager('@/assets/img/**')

	return imgFiles[url].default
}
