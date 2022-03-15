import { Avatar } from '@components/application/dashboard/avatar'
import { Container, JobTitle, Name, User } from './styles'

export const UserCard = () => {
    return (
        <Container>
            <Avatar />

            <User>
                <Name>Camila</Name>
                <JobTitle>Gerente de vendas</JobTitle>
            </User>
        </Container>
    )
}
