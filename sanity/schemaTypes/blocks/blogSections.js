import {defineType} from 'sanity'

export default defineType({
  name: 'blogSections',
  title: 'Section',
  type: 'reference',
  to: [{type: 'footer'}, {type: 'header'}, {type: 'ctaForm'}, {type: 'contactUs'}],
  options: {
    filter: ({document}) => {
      return {
        filter: '__i18n_lang == $baseLanguage',
        params: {baseLanguage: document.i18n_lang},
      }
    },
  },
})
