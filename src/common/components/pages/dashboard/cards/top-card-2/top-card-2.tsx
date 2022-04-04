import { AiOutlineRise, AiOutlineWifi } from 'react-icons/ai'
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

export const TopCard2 = () => {
    return (
        <Container>
            <Wrapper>
                <Icon>
                    <AiOutlineWifi />
                </Icon>
                <Body>
                    <Number>325</Number>
                    <Title>Internet</Title>
                    <Percentage>
                        <PercentageWrapper>
                            <AiOutlineRise />
                            <PercentageText>+2%</PercentageText>
                        </PercentageWrapper>
                        <Date>último mês</Date>
                    </Percentage>
                </Body>
            </Wrapper>
        </Container>
    )
}
