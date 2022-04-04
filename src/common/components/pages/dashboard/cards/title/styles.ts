import styled from 'styled-components'

export const Container = styled.div`
    grid-area: title;
`

export const PageTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSize.text_lg};
    color: ${({ theme }) => theme.fontColor.title};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
`
