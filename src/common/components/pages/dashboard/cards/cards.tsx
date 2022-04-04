import { AsideCard1 } from '@components/pages/dashboard/cards/aside-card-1'
import { AsideCard2 } from '@components/pages/dashboard/cards/aside-card-2'
import { MainCard } from '@components/pages/dashboard/cards/main-card'
import { SecondaryCard } from '@components/pages/dashboard/cards/secondary-card'
import { Title } from '@components/pages/dashboard/cards/title'
import { TopCard1 } from '@components/pages/dashboard/cards/top-card-1'
import { TopCard2 } from '@components/pages/dashboard/cards/top-card-2'
import { TopCard3 } from '@components/pages/dashboard/cards/top-card-3'
import { TopCard4 } from '@components/pages/dashboard/cards/top-card-4'
import { Container, Wrapper } from './styles'

export const Cards = () => {
    return (
        <Container>
            <Wrapper>
                <Title />
                <MainCard />
                <SecondaryCard />
                <AsideCard1 />
                <AsideCard2 />
                <TopCard1 />
                <TopCard2 />
                <TopCard3 />
                <TopCard4 />
            </Wrapper>
        </Container>
    )
}
