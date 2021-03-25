const Index = () => {
  return (
    <Stack
      gap={{ sm: 6, lg: 0 }}
      direction={{ sm: 'column' }}
    >
      <div>hi</div>
      <div>hi</div>
    </Stack>
  )
}

export default Index

import styles from './stack.module.css'

const breakpoints = ['sm', 'md', 'lg']

const gapScale = [0, 4, 8, 16, 24, 32, 64]

function mapProperty(value, postfix, unit = '', scale = []) {
  const obj = {}

  if (typeof value !== 'object') {
    const v = String(scale?.[value] || value) + unit
    obj[`--${postfix}`] = v
  } else {
    breakpoints.forEach((breakpoint, i) => {
      const v = value[breakpoint]
      const key = `--${breakpoint}-${postfix}`

      if (v != null) {
        obj[key] = String(scale?.[v] || v) + unit
      }
    })
  }

  return obj
}

const Stack = ({
  gap = {},
  direction = {},
  align = {},
  justify = {},
  children
}) => {
  return (
    <div
      className={styles.stack}
      style={{
        ...mapProperty(gap, 'gap', 'px', gapScale),
        ...mapProperty(direction, 'dir'),
        ...mapProperty(align, 'align'),
        ...mapProperty(justify, 'justify')
      }}
    >
      {children}
    </div>
  )
}
