import { Cards } from '@components/application/dashboard-page/cards'
import { Footer } from '@components/application/dashboard/footer'
import { Container } from './styles'

export const ContentArea = () => {
    return (
        <Container>
            <Cards />
            <Footer />
        </Container>
    )
}
