import React from 'react'
import * as colors from '../../themes/colors'
import fontSizes from '../../themes/fontSizes'
import weights from '../../themes/weights'
import styled from 'styled-components'
import { S300, S800 } from '../../themes/spaces'

const Container = styled.div`
  line-height: 1.8;
`

export default function Text({
  weight = 'medium',
  size = 'medium',
  color = 'textColor',
  align = 'left',
  children,
  style = {},
  ...props
}) {
  return (
    <Container
      {...props}
      style={{
        fontSize: fontSizes[size],
        color: colors[color],
        textAlign: align,
        fontWeight: weights[weight],
        ...style,
      }}
    >
      {children}
    </Container>
  )
}

export const SectionTitle = ({ title, ...props }) => (
  <Text weight="bold" size="xLarge" {...props} style={{ marginTop: S800, marginBottom: S300, ...props.style }}>
    {title}
  </Text>
)
