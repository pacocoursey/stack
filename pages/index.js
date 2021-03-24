const Index = () => {
  return (
    <Stack
      gap={{ sm: 4, md: 32, lg: 16 }}
      direction={{ sm: 'column', lg: 'row' }}
      align={{ sm: 'center', md: 'flex-start', lg: 'center' }}
      justify={{ sm: 'space-around', lg: 'space-between' }}
    >
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
    </Stack>
  )
}

export default Index

import styles from './stack.module.css'

const breakpoints = ['sm', 'md', 'lg']

function mapProperty(value, postfix) {
  const obj = {}

  breakpoints.forEach((breakpoint) => {
    if (value[breakpoint]) {
      obj[`--${breakpoint}-${postfix}`] = value[breakpoint]
    }
  })

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
        ...mapProperty(gap, 'gap'),
        ...mapProperty(direction, 'dir'),
        ...mapProperty(align, 'align'),
        ...mapProperty(justify, 'justify')
      }}
    >
      {children}
    </div>
  )
}
