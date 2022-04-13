import styled from 'styled-components'

export const Container = styled.div`
    grid-area: footer;

    padding: 1rem 0;
    width: 100%;
    border-top: 2px solid ${({ theme }) => theme.colors.background_800};

    display: flex;
    align-items: center;

    margin-top: auto;

    span {
        color: ${({ theme }) => theme.fontColor.label2};
        margin-left: 20px;
    }
`
