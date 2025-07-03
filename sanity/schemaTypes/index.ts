// documents
import page from './documents/page'
import settings from './documents/settings'
import casesItem from './documents/casesItem'
import redirect from './documents/redirect'
import articlesItem from './documents/articlesItem'

// objects
import link from './objects/link'
import linkInternal from './objects/linkInternal'
import linkExternal from './objects/linkExternal'
import socialIconItem from './objects/socialIcons'
import seo from './objects/seo'
import technologiesArray from './objects/technologiesArray'
import cookies from './objects/cookies'

// blocks
import imageWithAlt from './blocks/imageWithAlt'

export const schemaTypes = [
  // documents
  page,
  articlesItem,
  settings,
  casesItem,
  redirect,

  // objects
  link,
  linkInternal,
  linkExternal,
  socialIconItem,
  seo,
  technologiesArray,
  cookies,

  // blocks
  imageWithAlt,
]
