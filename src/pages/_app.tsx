import { GlobalStyle } from '@styles/globals'
import theme from '@styles/theme'
import type { AppProps } from 'next/app'
import { makeServer } from 'src/common/utils/services/mirage'
import { ThemeProvider } from 'styled-components'

if (process.env.NODE_ENV === 'development') {
    makeServer({ environment: 'development' })
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default MyApp
