import { Footer } from '@components/application/dashboard/footer'
import { Cards } from '@components/pages-components/dashboard/cards'
import { Container } from './styles'

export const DashboardArea = () => {
    return (
        <Container>
            <Cards />
            <Footer />
        </Container>
    )
}
