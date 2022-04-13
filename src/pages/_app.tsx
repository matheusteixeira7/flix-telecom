import { GlobalStyle } from '@styles/globals'
import theme from '@styles/theme'
import type { AppProps } from 'next/app'
import Error from 'next/error'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }: AppProps) {
    if (pageProps.error) {
        return (
            <Error
                statusCode={pageProps.error.statusCode}
                title={pageProps.error.message}
            />
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default MyApp
