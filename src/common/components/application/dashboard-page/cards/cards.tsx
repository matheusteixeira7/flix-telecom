import { AsideCard1 } from '@components/application/dashboard-page/cards/aside-card-1'
import { AsideCard2 } from '@components/application/dashboard-page/cards/aside-card-2'
import { MainCard } from '@components/application/dashboard-page/cards/main-card'
import { SecondaryCard } from '@components/application/dashboard-page/cards/secondary-card'
import { TopCard1 } from '@components/application/dashboard-page/cards/top-card-1'
import { TopCard2 } from '@components/application/dashboard-page/cards/top-card-2'
import { TopCard3 } from '@components/application/dashboard-page/cards/top-card-3'
import { TopCard4 } from '@components/application/dashboard-page/cards/top-card-4'
import { Container } from './styles'

export const Cards = () => {
    return (
        <Container>
            <MainCard></MainCard>
            <SecondaryCard></SecondaryCard>
            <AsideCard1></AsideCard1>
            <AsideCard2></AsideCard2>
            <TopCard1></TopCard1>
            <TopCard2></TopCard2>
            <TopCard3></TopCard3>
            <TopCard4></TopCard4>
        </Container>
    )
}
