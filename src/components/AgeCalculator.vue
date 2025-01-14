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

const pluralizeUk = (count, [one, few, many]) => {
	const mod10 = count % 10
	const mod100 = count % 100
	if (mod10 === 1 && mod100 !== 11) return `${count} ${one}`
	if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20))
		return `${count} ${few}`
	return `${count} ${many}`
}

const timeUnitsUk = {
	y: ['рік', 'роки', 'років'],
	m: ['місяць', 'місяці', 'місяців'],
	d: ['день', 'дні', 'днів'],
	h: ['година', 'години', 'годин'],
	min: ['хвилина', 'хвилини', 'хвилин'],
	s: ['секунда', 'секунди', 'секунд'],
	ms: ['мілісекунда', 'мілісекунди', 'мілісекунд'],
}

const formatAgeUk = age =>
	`${pluralizeUk(age.y, timeUnitsUk.y)} ${pluralizeUk(age.m, timeUnitsUk.m)}` +
	` ${pluralizeUk(age.d, timeUnitsUk.d)} ${pluralizeUk(age.h, timeUnitsUk.h)}` +
	` ${pluralizeUk(age.min, timeUnitsUk.min)} ${pluralizeUk(age.s, timeUnitsUk.s)}` +
	` і ${pluralizeUk(age.ms, timeUnitsUk.ms)}`

const pluralizeEn = (count, unit) => `${count} ${unit}${count === 1 ? '' : 's'}`

const formatAgeEn = age =>
	`${pluralizeEn(age.y, 'year')} ${pluralizeEn(age.m, 'month')}` +
	` ${pluralizeEn(age.d, 'day')} ${pluralizeEn(age.h, 'hour')}` +
	` ${pluralizeEn(age.min, 'minute')} ${pluralizeEn(age.s, 'second')}` +
	` and ${pluralizeEn(age.ms, 'millisecond')}`

const updateResult = () => {
	const age = calculateAge()
	result.value = locale.value === 'uk' ? formatAgeUk(age) : formatAgeEn(age)
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
