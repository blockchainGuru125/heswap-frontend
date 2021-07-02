import { useContext } from 'react'
import { ThemeContext as StyledThemeContext } from 'styled-components'
import { ThemeContext } from 'contexts/ThemeContext'

const useTheme = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext)
  const theme = useContext(StyledThemeContext)
  theme.colors.primary = 'rgb(18, 99, 241)'
  theme.colors.secondary = 'rgb(249, 59, 93)'
  theme.colors.success = 'rgb(29, 200, 114)'
  theme.colors.background = 'rgb(7, 22, 45)'
  theme.colors.gradients.bubblegum = 'linear-gradient(180deg, #071c3c, #002b6f)'
  theme.leftBar.background = 'rgb(16, 38, 72)'
  theme.leftBar.footerBackground = 'rgb(28, 50, 84)'
  return { isDark, toggleTheme, theme }
}

export default useTheme
