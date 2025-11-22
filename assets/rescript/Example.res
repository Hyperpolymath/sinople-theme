/**
 * ReScript Example Module
 *
 * Type-safe functional programming for theme logic
 */

@val external document: {..} = "document"
@val external console: {..} = "console"

type theme = Light | Dark

let getSystemTheme = (): theme => {
  let prefersDark = %raw(`window.matchMedia('(prefers-color-scheme: dark)').matches`)
  prefersDark ? Dark : Light
}

let applyTheme = (theme: theme): unit => {
  let themeStr = switch theme {
  | Light => "light"
  | Dark => "dark"
  }

  document["documentElement"]["dataset"]["theme"] = themeStr
  console["log"](`Theme applied: ${themeStr}`)
}

let init = (): unit => {
  console["log"]("ReScript module initialized")
  let systemTheme = getSystemTheme()
  applyTheme(systemTheme)
}
