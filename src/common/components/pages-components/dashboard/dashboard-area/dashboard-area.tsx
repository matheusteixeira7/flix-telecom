import { Footer } from '@components/application/dashboard/footer'
import { Cards } from '@components/pages-components/dashboard/cards'
import { Container, Content } from './styles'

export const DashboardArea = () => {
    return (
        <Container>
            <Content>
                <Cards />
            </Content>

            <Footer />
        </Container>
    )
}
