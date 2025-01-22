<template>
	<div class="lang-swither-wrapper flex-center rel">
		<menu
			v-click-outside="closeMenu"
			class="lang-switcher select flex-col-center hideO abs"
			:class="{ open: showOptions, close: !showOptions }"
			:title="$t('toggleLangTip')"
		>
			<li
				v-for="({ value, image }, index) in sortedLanguageOptions"
				:key="index"
				class="select-option rel"
				:class="{ selected: selectedLanguage === value }"
				@click="handleClick(value)"
			>
				<img
					:alt="$t(`flagAlt_${value}`)"
					class="select-option-img"
					:src="image"
				/>
			</li>
		</menu>
	</div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import i18n from '@/i18n/'
import getIPInfo from '@/helpers/ipInfoHelper'

const BASE_URL = import.meta.env.BASE_URL
const selectedLanguage = ref(i18n.global.locale)
const showOptions = ref(false)

const languageOptions = Object.keys(i18n.global.messages).map(locale => ({
	value: locale,
	image: BASE_URL + i18n.global.messages[locale].flag,
}))

const sortedLanguageOptions = computed(() => {
	return [...languageOptions].sort(o1 =>
		i18n.global.locale === o1.value ? -1 : 1
	)
})

const handleClick = lang => {
	setLanguage(lang)
	showOptions.value = !showOptions.value
}

const closeMenu = () => {
	showOptions.value = false
}

const setLanguage = lang => {
	i18n.global.locale = lang
	sessionStorage.setItem('lang', lang)
	selectedLanguage.value = lang
}

onMounted(async () => {
	let defaultLang = sessionStorage.getItem('lang')

	if (!defaultLang) {
		const ipInfo = await getIPInfo()
		defaultLang = ipInfo.country.iso_code === 'UA' ? 'uk' : 'en'
		setLanguage(defaultLang)
	} else {
		i18n.global.locale = defaultLang
	}
})
</script>

<style lang="scss" scoped>
.lang-swither-wrapper {
	width: 20vmin;
	height: 10vmin;

	* {
		cursor: pointer !important;
	}
}

.lang-switcher {
	top: 1.25vmin;
}

.select {
	justify-content: space-between;

	&::after {
		content: '';
		z-index: -1;
		top: 0;
		width: 7.5vmin;
		background: #80808080;
		border-radius: 3.75vmin;
	}

	&-option {
		width: 7.5vmin;
		height: 7.5vmin;

		&::after {
			content: '';
			z-index: 1;
			top: 0;
			left: 0;
			width: 7.5vmin;
			height: 7.5vmin;
			border-radius: 3.75vmin;
			box-shadow: inset 0 0 0.5rem 0.166rem #80808080;
			backdrop-filter: saturate(0.8);
		}

		&-img {
			width: 7.5vmin;
			height: 7.5vmin;
			object-fit: cover;
			-webkit-object-fit: cover;
			-moz-object-fit: cover;
			border-radius: 50%;
			filter: contrast(1.05) brightness(1.05);
		}
	}

	&.close,
	&.close::after {
		height: 7.5vmin;
	}

	&.open,
	&.open::after {
		height: 17vmin;
	}
}
</style>
