type ImgFiles = {
	[key: string]: { default: string }
}

export function useSrc(url: string): string {
	// const imgFiles: ImgFiles = import.meta.globEager('@/assets/img/**')
	// return imgFiles[url].default || ''
	return url
}

// export default function useAsset(path: string): string {
//   const assets = import.meta.glob('~/assets/**/*', {
//     eager: true,
//     import: 'default',
//   })

//  // all my file startsWith '/' ex: /home/hero.png  you'll need to adjust
//   return assets[`/assets${path}`]
// }