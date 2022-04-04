import { Container, Title } from './styles'

interface ITitleProps {
    title: string
}

export const PageTitle = ({ title }: ITitleProps) => {
    return (
        <Container>
            <Title>{title}</Title>
        </Container>
    )
}
