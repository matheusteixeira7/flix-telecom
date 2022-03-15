import { AiOutlineRise } from 'react-icons/ai'
import { BiTv } from 'react-icons/bi'
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

export const TopCard4 = () => {
    return (
        <Container>
            <Wrapper>
                <Icon>
                    <BiTv />
                </Icon>
                <Body>
                    <Number>132</Number>
                    <Title>TV</Title>
                    <Percentage>
                        <PercentageWrapper>
                            <AiOutlineRise />
                            <PercentageText>+0,44%</PercentageText>
                        </PercentageWrapper>
                        <Date>último mês</Date>
                    </Percentage>
                </Body>
            </Wrapper>
        </Container>
    )
}
