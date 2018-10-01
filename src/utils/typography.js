import Typography from 'typography'

const typography = new Typography({
  title: 'practical typography',
  baseFontSize: '18px',
  baseLineHeight: 1.4,
  scaleRatio: 1.5,
  headerFontFamily: ['Source Sans Pro', 'Verdana', 'sans-serif'],
  bodyFontFamily: ['Source Serif Pro', 'Georgia', 'serif'],
  headerGray: 20,
  bodyGray: 20,
  blockMarginBottom: 1,
  includeNormalize: false
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
