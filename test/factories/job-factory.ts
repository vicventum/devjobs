import { Factory } from 'fishery'
import { faker } from '@faker-js/faker'

import type { Color } from '@/modules/core/types'
import type { JobType, JobData } from '@/modules/jobs/types'

// import type { Color, JobData, JobType } from '@/types'

const jobTypeList: JobType[] = ['contract', 'full time', undefined]

// Generate a random color
function generateRandomColor(): Color {
	const isHexColor = Math.random() < 0.5

	// Generate color in format hexadecimal
	if (isHexColor) return faker.color.rgb({ casing: 'upper' }) as Color
	// Generate color in format rgb(var(--variable))
	return `rgb(var(--${faker.lorem.word()}))` as Color
}

const factoryJob = Factory.define<JobData>(({ sequence }) => ({
	id: `${sequence}`,
	date: new Date(faker.date.recent()),
	logo: faker.image.avatar(),
	title: faker.person.jobTitle(),
	company: faker.company.name(),
	location: faker.location.city(),
	color: generateRandomColor(),
	type: faker.helpers.arrayElement<JobType>(jobTypeList),
	remote: true, // ! cambiar a data de Faker
	// content: faker.lorem.paragraph(),
	// user: generateUser(),
}))

export function generateJob(params: any) {
	return factoryJob.build(params)
}

export function generateJobList(min = 0, max = 10) {
	const length = Math.random() * (max - min) + min
	return factoryJob.buildList(length)
}
