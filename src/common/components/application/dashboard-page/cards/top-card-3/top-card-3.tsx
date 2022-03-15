import { AiOutlineRise } from 'react-icons/ai'
import { FaMobileAlt } from 'react-icons/fa'
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

export const TopCard3 = () => {
    return (
        <Container>
            <Wrapper>
                <Icon>
                    <FaMobileAlt />
                </Icon>
                <Body>
                    <Number>325</Number>
                    <Title>Telefonia Móvel</Title>
                    <Percentage>
                        <PercentageWrapper>
                            <AiOutlineRise />
                            <PercentageText>+0,24%</PercentageText>
                        </PercentageWrapper>
                        <Date>último mês</Date>
                    </Percentage>
                </Body>
            </Wrapper>
        </Container>
    )
}
