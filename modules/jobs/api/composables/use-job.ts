import type { Color } from '@/modules/core/types'
import type { JobDataDetail, Get } from '@/modules/jobs/types'
import { utilFormatJob } from '@/modules/jobs/utils/util-format-job'
import { getJobDetail } from '@/modules/jobs/api/services/jobs-service'
import { get as ofetchGet } from '@/modules/jobs/api/providers/jobs-ofetch-provider'
import { useJobsStore } from '@/modules/jobs/stores/jobs.store'

export const useJob = async ({ id, color }: { id: string; color?: Color }) => {
	const store = useJobsStore()
	const { jobDetail } = storeToRefs(store)
	// store.setJob(null)

	// const jobDetail = ref<JobDataDetail>()
	const provider: Get = ofetchGet
	// console.log('🚀 ~ useJob ~ ofetchApi:', ofetchApi)

	const { data, pending, error } = await useAsyncData(
		'jobDetail',
		() => getJobDetail(provider, { id }),
		{
			lazy: true,
			// immediate: false,
			// server: false,
		},
	)

	// ? Insertando la data (cuando ya se obtenga) en el store
	watch(
		() => data.value,
		(newJobDetailResponse) => {
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
