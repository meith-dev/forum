/**
 * The board's build-time registry.
 *
 * Everything installable is named here, statically, so the bundler can see it
 * and the compiler can check it. Nothing is discovered by scanning a directory
 * at runtime — a production build contains only what the bundler could see, so a
 * directory walked at request time is empty and a plugin "installed" that way is
 * not there at all.
 *
 * Adding a theme is: `npm install` it, add a line here, redeploy. Adding a
 * plugin is the same, through board.plugins.json and meith.plugins.ts —
 * see docs/extensions/plugins.md.
 */
import { defineForumConfig } from '@meith/web/config'
import {
  BROWSER_THEME_COLOR,
  DARK_TOKENS,
  meithMessages,
  meithTheme,
  LIGHT_TOKENS,
} from '@meith/theme-meith'

import { INSTALLED_PLUGINS } from './meith.plugins'

export default defineForumConfig({
  themes: {
    meith: {
      key: 'meith',
      title: 'Meith',
      tokens: { light: LIGHT_TOKENS, dark: DARK_TOKENS },
      browserThemeColor: BROWSER_THEME_COLOR,
      theme: meithTheme,
      messages: meithMessages,
    },
  },
  defaultTheme: 'meith',

  plugins: INSTALLED_PLUGINS,
})
