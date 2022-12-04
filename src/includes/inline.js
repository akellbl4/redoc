const mq = window.matchMedia('(prefers-color-scheme: dark)')
const theme = localStorage.getItem('theme')

if (theme === 'dark' || (!theme && mq.matches)) {
  document.documentElement.classList.add('dark')
}
