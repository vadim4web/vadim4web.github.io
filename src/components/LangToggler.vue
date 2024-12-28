<template>
  <div class="lang-swither-wrapper">
    <menu
      :title="$t('toggleLangTip')"
      v-click-outside="closeMenu"
      class="lang-switcher select flex-col-center"
      :class="{ open: showOptions, close: !showOptions }"
    >
      <li
        v-for="(option, index) in sortedLanguageOptions"
        @click="handleClick(option.value)"
        :key="index"
        :class="{ selected: selectedLanguage === option.value }"
        class="select-option"
      >
        <img
          :src="option.image"
          :alt="$t('lang') + ' flag'"
          class="select-option-img"
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

const languageOptions = Object.keys(i18n.global.messages).map(locale => ({
  value: locale,
  image: BASE_URL + i18n.global.messages[locale].flag,
}))

const sortedLanguageOptions = computed(() => {
  return [...languageOptions].sort(o1 =>
    i18n.global.locale === o1.value ? -1 : 1
  )
})

const selectedLanguage = ref(i18n.global.locale)
const showOptions = ref(false)

const handleClick = lang => {
  setLanguage(lang)
  showOptions.value = !showOptions.value
}

const closeMenu = () => {
  showOptions.value = false
}

const openMenu = () => {
  showOptions.value = true
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

<style lang="scss">
.lang-swither-wrapper {
  position: relative;
  width: 100%;
  height: 5rem;
  padding: 0.5rem 0 0 0;

  * {
    cursor: pointer !important;
  }
}

.lang-switcher {
  position: absolute;
  left: 0;
}

.select {
  justify-content: space-between;
  overflow: hidden;

  &::after {
    position: absolute;
    background: #80808080;
    top: 0;
    left: calc((100% - 3.75rem) / 2);
    content: '';
    width: 3.75rem;
    z-index: -1;
    border-radius: 1.875rem;
  }

  &-option {
    width: 3.75rem;
    height: 3.75rem;

    position: relative;

    &::after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 3.75rem;
      height: 3.75rem;
      border-radius: 1.875rem;
      box-shadow: inset 0 0 1rem 0.33rem #80808080;
      z-index: 1;
      backdrop-filter: saturate(0.8);
    }

    &-img {
      border-radius: 50%;
      width: 3.75rem;
      height: 3.75rem;
      filter: blur(0.5px) contrast(1.05) brightness(1.05);
      object-fit: cover;
      -webkit-object-fit: cover;
      -moz-object-fit: cover;
    }
  }

  &.close,
  &.close::after {
    height: 3.75rem;
  }

  &.open,
  &.open::after {
    height: 8.25rem;
  }
}
</style>
