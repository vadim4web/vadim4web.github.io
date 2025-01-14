<template>
	{{ result }}
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

const { locale } = useI18n()
const result = ref('')
let intervalId = null
const birthDate = dayjs('1988-06-17T11:40:00Z')

const pluralize = (count, forms) =>
	`${count} ${
		forms[
			count % 10 === 1 && count % 100 !== 11 ? 0
			: (
				count % 10 >= 2 &&
				count % 10 <= 4 &&
				(count % 100 < 10 || count % 100 >= 20)
			) ?
				1
			:	2
		]
	}`

const timeUnitsUk = [
	'рік',
	'роки',
	'років',
	'місяць',
	'місяці',
	'місяців',
	'день',
	'дні',
	'днів',
	'година',
	'години',
	'годин',
	'хвилина',
	'хвилини',
	'хвилин',
	'секунда',
	'секунди',
	'секунд',
	'мілісекунд',
]

const calculateAge = () => {
	const now = dayjs()
	const years = now.diff(birthDate, 'year')
	const months = now.diff(birthDate.add(years, 'year'), 'month')
	const days = now.diff(
		birthDate.add(years, 'year').add(months, 'month'),
		'day'
	)
	const hours = now.diff(birthDate, 'hour') % 24
	const minutes = now.diff(birthDate, 'minute') % 60
	const seconds = now.diff(birthDate, 'second') % 60
	const milliseconds = now.diff(birthDate, 'millisecond') % 1000

	return {
		y: years,
		m: months,
		d: days,
		h: hours,
		min: minutes,
		s: seconds,
		ms: milliseconds,
	}
}

const formatAge = age => {
	const units = ['y', 'm', 'd', 'h', 'min', 's', 'ms']
	return units
		.map((unit, idx) =>
			pluralize(age[unit], timeUnitsUk.slice(idx * 3, (idx + 1) * 3))
		)
		.join(' ')
}

const updateResult = () => {
	const age = calculateAge()
	result.value = formatAge(age)
}

const startInterval = () => (intervalId = setInterval(updateResult, 33))

onBeforeUnmount(() => {
	if (intervalId) clearInterval(intervalId)
})
onMounted(() => {
	updateResult()
	startInterval()
})
watch(locale, updateResult)
</script>
