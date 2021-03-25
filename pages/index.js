const Index = () => {
  return (
    <Stack
      gap={{ lg: 6, sm: 1, md: 4 }}
      direction={{ sm: 'column', lg: 'column', md: 'row' }}
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

      if (v) {
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
