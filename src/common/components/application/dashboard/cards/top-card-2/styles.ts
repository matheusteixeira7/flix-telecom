import styled from 'styled-components'

export const Container = styled.div`
    grid-area: top-card-2;
    background-color: ${({ theme }) => theme.colors.background_800};

    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    border-radius: 10px;

    padding: 1.25rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.laptopL}) {
        padding: 0.5rem;
    }
`

export const Wrapper = styled.div`
    display: flex;
`

export const Body = styled.div`
    margin-left: 1rem;
`

export const Icon = styled.span`
    color: ${({ theme }) => theme.colors.warning};
    background-color: ${({ theme }) => theme.colors.warning_background};
    height: 3.75rem;
    width: 3.75rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.5rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.laptopL}) {
        height: 3rem;
        width: 3rem;

        font-size: 1rem;
    }
`

export const Number = styled.div`
    font-size: ${({ theme }) => theme.fontSize.text_lg};
    color: ${({ theme }) => theme.fontColor.title};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
`

export const Title = styled.div`
    font-size: ${({ theme }) => theme.fontSize.text_sm};
    color: ${({ theme }) => theme.fontColor.label};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
`

export const Percentage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PercentageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.colors.success};
    font-size: ${({ theme }) => theme.fontSize.text_sm};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
`

export const PercentageText = styled.div`
    margin-left: 0.2rem;
`

export const Date = styled.div`
    font-size: ${({ theme }) => theme.fontSize.text_sm};
    color: ${({ theme }) => theme.fontColor.label};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};

    margin-left: 0.5rem;
`
