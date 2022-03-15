import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.colors.background_700};
    border-radius: 5px;
    padding: 0.5rem;
    width: 100%;
    margin-top: auto;
`

export const User = styled.div``

export const Name = styled.div`
    font-size: ${({ theme }) => theme.fontSize.text_sm};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.white};
`

export const JobTitle = styled.div`
    font-size: ${({ theme }) => theme.fontSize.text_xs};
    color: ${({ theme }) => theme.colors.offwhite};
    font-weight: ${({ theme }) => theme.fontWeight.light};
`
