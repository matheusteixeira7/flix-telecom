import styled from 'styled-components'

export const Container = styled.div``

export const List = styled.ul`
    list-style-type: none;
`

export const Item = styled.li``

export const LinkWrapper = styled.a`
    color: ${({ theme }) => theme.colors.offwhite};

    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin-bottom: 20px;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.colors.white};
    }
`

export const LinkName = styled.span`
    margin-left: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.text_sm};
`
