<template>
  {{ result }}
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { useI18n } from 'vue-i18n';


const { locale } = useI18n();
const result = ref('');
let intervalId = null;

const MS_IN_SECOND = 1000;
const MS_IN_MINUTE = MS_IN_SECOND * 60;
const MS_IN_HOUR = MS_IN_MINUTE * 60;
const MS_IN_DAY = MS_IN_HOUR * 24;
const MS_IN_YEAR = MS_IN_DAY * 365.25;

const calculateAge = (endDate, startDate) => {
  let diff = endDate.getTime() - startDate.getTime();
  const years = Math.floor(diff / MS_IN_YEAR);
  diff -= years * MS_IN_YEAR;
  const months = Math.floor(diff / (MS_IN_DAY * 30));
  diff -= months * MS_IN_DAY * 30;
  const days = Math.floor(diff / MS_IN_DAY);
  diff -= days * MS_IN_DAY;
  const hours = Math.floor(diff / MS_IN_HOUR);
  diff -= hours * MS_IN_HOUR;
  const minutes = Math.floor(diff / MS_IN_MINUTE);
  diff -= minutes * MS_IN_MINUTE;
  const seconds = Math.floor(diff / MS_IN_SECOND);
  diff -= seconds * MS_IN_SECOND;
  const milliseconds = diff;
  return { y: years, m: months, d: days, h: hours, min: minutes, s: seconds, ms: milliseconds };
};

const pluralizeUk = (count, [one, few, many]) => {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return `${count} ${one}`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return `${count} ${few}`;
  return `${count} ${many}`;
};

const timeUnitsUk = {
  y: ['рік', 'роки', 'років'],
  m: ['місяць', 'місяці', 'місяців'],
  d: ['день', 'дні', 'днів'],
  h: ['година', 'години', 'годин'],
  min: ['хвилина', 'хвилини', 'хвилин'],
  s: ['секунда', 'секунди', 'секунд'],
  ms: ['мілісекунд', 'мілісекунд', 'мілісекунд'],
};

const formatAgeUk = (age) => {
  return `${pluralizeUk(age.y, timeUnitsUk.y)}, ${pluralizeUk(age.m, timeUnitsUk.m)}, ` +
         `${pluralizeUk(age.d, timeUnitsUk.d)}, ${pluralizeUk(age.h, timeUnitsUk.h)}, ` +
         `${pluralizeUk(age.min, timeUnitsUk.min)}, ${pluralizeUk(age.s, timeUnitsUk.s)} ` +
         `та ${pluralizeUk(age.ms, timeUnitsUk.ms)}`;
};

const pluralizeEn = (count, unit) => {
  return `${count} ${unit}${count === 1 ? '' : 's'}`;
};

const formatAgeEn = (age) => {
  return `${pluralizeEn(age.y, 'year')}, ${pluralizeEn(age.m, 'month')}, ` +
         `${pluralizeEn(age.d, 'day')}, ${pluralizeEn(age.h, 'hour')}, ` +
         `${pluralizeEn(age.min, 'minute')}, ${pluralizeEn(age.s, 'second')} ` +
         `and ${pluralizeEn(age.ms, 'millisecond')}`;
};

const updateResult = () => {
  const age = calculateAge(new Date(), new Date('1988-06-17T11:40:00Z'));
  result.value = locale.value === 'uk' ? formatAgeUk(age) : formatAgeEn(age);
};

const startInterval = () => {
  intervalId = setInterval(updateResult, 30);
};

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId);
});

onMounted(() => {
  updateResult();
  startInterval();
});

watch(locale, updateResult);
</script>