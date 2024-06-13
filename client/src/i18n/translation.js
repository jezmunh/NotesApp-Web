import i18n from '@/i18n'

const Translations = {
  get supportedLocales() {
    return import.meta.env.VITE_SUPPORTED_LOCALES.split(',')
  },
  set currentLocale(newLocale) {
    
    i18n.global.locale.value = newLocale
  },
  async switchLanguage(newLocale) {
    Translations.currentLocale = newLocale
    document.querySelector("html").setAttribute("lang", newLocale)
    localStorage.setItem("user-locale", newLocale)
  },
  getPersistedLocale() {
    const persistedLocale = localStorage.getItem("user-locale")
    if(Translations.isLocaleSupported(persistedLocale)) {
      return persistedLocale
    } else {
      return null
    }
  },
}
export default Translations