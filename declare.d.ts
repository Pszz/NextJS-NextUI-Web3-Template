// eslint-disable-next-line no-unused-vars
declare interface Window {
  ethereum?: any
}

declare module '*.css' {
  const value: string
  export default value
}

declare module '*.svg' {
  import * as React from 'react'
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>

  const src: string
  export default src
}

// eslint-disable-next-line no-unused-vars
declare namespace JSX {
  // eslint-disable-next-line no-unused-vars
  interface IntrinsicElements {
    'lottie-player': any
  }
}
