import styled from 'styled-components'

export const Container = styled.div`
    grid-area: aside-card-2;
    background-color: ${({ theme }) => theme.colors.background_800};

    padding: 1.25rem;

    border-radius: 10px;
`

export const Title = styled.span`
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.fontColor.label};
`

export const Seller = styled.div`
    display: flex;
    justify-content: space-between;

    padding-bottom: 1rem;
    margin-top: 1rem;

    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const SellerWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const SellerName = styled.span`
    font-size: ${({ theme }) => theme.fontSize.text_xs};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.fontColor.label};
`

export const SellerCity = styled.span`
    font-size: ${({ theme }) => theme.fontSize.text_xs};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.fontColor.label2};
`

export const SellerNumber = styled.span`
    font-size: ${({ theme }) => theme.fontSize.text_xs};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.success};
`
