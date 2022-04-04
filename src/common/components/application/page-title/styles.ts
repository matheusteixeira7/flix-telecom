import styled from 'styled-components'

export const Container = styled.div`
    padding: 1.25rem;
`

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontSize.text_lg};
    color: ${({ theme }) => theme.fontColor.title};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
`
