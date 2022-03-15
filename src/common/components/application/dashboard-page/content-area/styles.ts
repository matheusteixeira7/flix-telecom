import styled from 'styled-components'

export const Container = styled.div`
    grid-area: content-area;
    background-color: ${({ theme }) => theme.colors.background_900};

    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h1`
    grid-area: title;

    font-size: ${({ theme }) => theme.fontSize.text_lg};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.fontColor.title};

    align-self: flex-start;

    margin-bottom: 1rem;
`
