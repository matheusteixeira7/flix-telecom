import { Navlist } from '@components/application/dashboard/navlist'
import { UserCard } from '@components/application/dashboard/user-card'
import Image from 'next/image'
import flixLogo from 'src/../public/images/flix-logo.svg'
import { Container, Header, HeaderTitle, Subtitle, Title } from './styles'

export const Aside = () => {
    return (
        <Container>
            <Header>
                <Image src={flixLogo} alt="Logo" width={60} height={38} />
                <HeaderTitle>
                    <Title>Flix Telecom</Title>
                    <Subtitle>Dashboard</Subtitle>
                </HeaderTitle>
            </Header>

            <Navlist />
            <UserCard />
        </Container>
    )
}
