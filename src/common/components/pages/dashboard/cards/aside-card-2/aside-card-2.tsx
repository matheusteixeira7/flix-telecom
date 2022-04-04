import {
    Container,
    Seller,
    SellerCity,
    SellerName,
    SellerNumber,
    SellerWrapper,
    Title,
} from './styles'

export const AsideCard2 = () => {
    return (
        <Container>
            <Title>Ranking de vendedores</Title>

            <Seller>
                <SellerWrapper>
                    <SellerName>Marcos Rocha</SellerName>
                    <SellerCity>Resende</SellerCity>
                </SellerWrapper>

                <SellerNumber>+462</SellerNumber>
            </Seller>

            <Seller>
                <SellerWrapper>
                    <SellerName>Diego Ribeiro</SellerName>
                    <SellerCity>Resende</SellerCity>
                </SellerWrapper>

                <SellerNumber>+462</SellerNumber>
            </Seller>

            <Seller>
                <SellerWrapper>
                    <SellerName>Teresa Cristina</SellerName>
                    <SellerCity>Resende</SellerCity>
                </SellerWrapper>

                <SellerNumber>+462</SellerNumber>
            </Seller>

            <Seller>
                <SellerWrapper>
                    <SellerName>Marisa Miranda</SellerName>
                    <SellerCity>Resende</SellerCity>
                </SellerWrapper>

                <SellerNumber>+462</SellerNumber>
            </Seller>
        </Container>
    )
}
