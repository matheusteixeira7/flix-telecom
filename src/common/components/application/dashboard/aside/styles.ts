import styled from 'styled-components'

export const Container = styled.div`
    grid-area: aside;
    background-color: ${({ theme }) => theme.colors.background_800};
    padding: 20px;
    display: flex;
    flex-direction: column;
`

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    padding-bottom: 20px;
    margin-bottom: 20px;

    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const HeaderTitle = styled.div``

export const Title = styled.h1`
    color: white;
    font-size: ${({ theme }) => theme.fontSize.text_lg};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
`

export const Subtitle = styled.span`
    color: white;
    font-size: ${({ theme }) => theme.fontSize.text_xs};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
`
