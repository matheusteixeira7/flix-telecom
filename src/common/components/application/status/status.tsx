import { Container, Title } from './styles'

interface IStatusProps {
    orderStatus: string
}

export const Status = ({ orderStatus }: IStatusProps) => {
    return (
        <Container>
            <Title status={orderStatus}>{orderStatus}</Title>
        </Container>
    )
}
