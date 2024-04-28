import type { Color } from '@/modules/core/types'
import type { JobDataDetail, Get } from '@/modules/jobs/types'
import { utilFormatJob } from '@/modules/jobs/utils/util-format-job'
import { getJobDetail } from '@/modules/jobs/api/services/jobs-service'
import { get as ofetchGet } from '@/modules/jobs/api/providers/jobs-ofetch-provider'
import { useOfetchApi } from '@/modules/jobs/api/clients/use-ofetch-api'
import { useJobsStore } from '@/modules/jobs/stores/jobs.store'

export const useJob = async ({ id, color }: { id: string; color?: Color }) => {
	const store = useJobsStore()
	const { jobDetail } = storeToRefs(store)
	// store.setJob(null)

	// const jobDetail = ref<JobDataDetail>()
	const provider: Get = ofetchGet
	const ofetchApi = useOfetchApi()
	// console.log('🚀 ~ useJob ~ ofetchApi:', ofetchApi)

	const { data, pending, error } = await useAsyncData(
		'jobDetail',
		() => getJobDetail(provider, { id }, ofetchApi),
		{
			lazy: true,
			// immediate: false,
			// server: false,
		},
	)
	console.log(
		'🧡 ~ useJob ~ data:',
		data.value,
		pending.value,
		error.value,
		jobDetail.value,
		id,
	)

	// ? Insertando la data (cuando ya se obtenga) en el store
	watch(
		() => data.value,
		(newJobDetailResponse) => {
			console.log(
				'🚀 ~ useJob ~ newJobDetailResponse:',
				data.value,
				newJobDetailResponse,
				id,
			)
			if (newJobDetailResponse) {
				// if (newJobDetailResponse.id !== id) return null
				// jobDetail.value = utilFormatJob(newJobDetailResponse, color)
				if (newJobDetailResponse.id !== id) {
					store.setJob(null)
					return null
				}
				const formattedJob = utilFormatJob(newJobDetailResponse, color)
				store.setJob(formattedJob)
			}
		},
		// ? Al colocarlo en `false`, hace que no se tenga data desde un inicio, y por lo tanto se muestre el loader, de otra forma se mostraría la data previamente guardada por el `useAsyncData`
		{ immediate: true },
	)
	console.log(
		'🧡🧡 ~ useJob ~ data:',
		jobDetail.value,
		data.value,
		pending.value,
		error.value,
	)

	// if (data.value) {
	// 	const formattedJob = utilFormatJob(data.value, color)
	// 	store.setJob(formattedJob)
	// }

	return {
		// --- Properties
		jobDetail,
		error,
		isLoading: pending,
		// isError: !!error.value,

		// --- Computed
		isError: computed(() => !!error.value),
	}
}
