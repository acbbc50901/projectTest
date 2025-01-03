const defaultTheme = {
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
}


export const theme = {
  ...defaultTheme,
  colors: {
    primary: '#0070f3',
    background: '#ffffff',
    text: '#000000',
  },
}

export const darkTheme = {
  ...defaultTheme,
  colors: {
    primary: '#333',
    background: '#ffffff',
    text: '#000000',
  },
}
export type Theme = typeof theme;