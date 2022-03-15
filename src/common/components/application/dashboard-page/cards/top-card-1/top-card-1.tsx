import { AiOutlineRise } from 'react-icons/ai'
import { GoGraph } from 'react-icons/go'
import {
    Body,
    Container,
    Date,
    Icon,
    Number,
    Percentage,
    PercentageText,
    PercentageWrapper,
    Title,
    Wrapper,
} from './styles'

export const TopCard1 = () => {
    return (
        <Container>
            <Wrapper>
                <Icon>
                    <GoGraph />
                </Icon>
                <Body>
                    <Number>575</Number>
                    <Title>Novos clientes</Title>
                    <Percentage>
                        <PercentageWrapper>
                            <AiOutlineRise />
                            <PercentageText>+10%</PercentageText>
                        </PercentageWrapper>
                        <Date>último mês</Date>
                    </Percentage>
                </Body>
            </Wrapper>
        </Container>
    )
}
