// Generated from board.plugins.json by `meith plugin:add` and `meith plugin:remove`.
//
// The simple path is those commands, or editing board.plugins.json and running one of
// them. A plugin that does not fit that convention can be added here by hand instead —
// keep it out of board.plugins.json so a regenerate does not drop it.
//
// docs/customization/plugins.md explains both.

import type { InstalledPlugin } from '@meith/web/config'
import { messages as duesMessages, plugin as duesPlugin } from '@meith/plugin-dues'

export const INSTALLED_PLUGINS: readonly InstalledPlugin[] = [
  { key: 'dues', enabled: true, plugin: duesPlugin, messages: duesMessages },
]

export function installedPluginDefinitions() {
  return INSTALLED_PLUGINS.filter(
    (entry) => entry.enabled !== false && entry.plugin !== undefined,
  ).map((entry) => entry.plugin)
}
