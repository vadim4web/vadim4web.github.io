export default function () {
  return sessionStorage.getItem('theme')
    ? sessionStorage.getItem('theme')
    : window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
}
