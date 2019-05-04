import { css } from 'styled-components'

export const media = {
  sp: (...args) => css`
    @media (max-width: 768px) {
      ${ css(...args) }
    }
  `,
  tablet: (...args) => css`
    @media (min-width: 769px) and (max-width: 1112px) {
      ${ css(...args) }
    }
  `,
}
