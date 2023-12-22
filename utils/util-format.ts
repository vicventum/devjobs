// export const a = {
// 	b() {
// 		return 'b'
// 	},
// }
export default function utilFormat() {
	function toRelativeDate(
		date: Date | number | string,
		lang: string = 'es',
	): string {
		const now: Date = new Date()
		const diff: number = now.getTime() - new Date(date).getTime()

		const formatter: Intl.RelativeTimeFormat = new Intl.RelativeTimeFormat(
			lang,
			{ numeric: 'auto' },
		)

		if (diff <= 0) return formatter.format(0, 'second')
		else if (diff < 1000 * 60) {
			return formatter.format(-Math.floor(diff / 1000), 'second')
		} else if (diff < 1000 * 60 * 60) {
			return formatter.format(-Math.floor(diff / (1000 * 60)), 'minute')
		} else if (diff < 1000 * 60 * 60 * 24) {
			return formatter.format(-Math.floor(diff / (1000 * 60 * 60)), 'hour')
		} else if (diff < 1000 * 60 * 60 * 24 * 7) {
			return formatter.format(-Math.floor(diff / (1000 * 60 * 60 * 24)), 'day')
		} else {
			return formatter.format(
				-Math.floor(diff / (1000 * 60 * 60 * 24 * 7)),
				'week',
			)
		}
	}

	return {
		toRelativeDate,
	}
}
