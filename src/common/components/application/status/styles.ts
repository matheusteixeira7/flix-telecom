import styled from 'styled-components'

interface ITitleProps {
    status: string
}

export const Container = styled.div``

export const Title = styled.span<ITitleProps>`
    color: ${({ status, theme }) =>
        status === 'Pendente'
            ? theme.colors.warning
            : status === 'Cadastrado'
            ? theme.colors.info
            : status === 'Cancelado'
            ? theme.colors.danger
            : theme.colors.success};

    font-size: ${({ theme }) => theme.fontSize.text_sm};
    font-weight: ${({ theme }) => theme.fontWeight.medium};

    padding: 0.2rem 1rem;
    border-radius: 1rem;

    background-color: ${({ status, theme }) =>
        status === 'Pendente'
            ? theme.colors.warning_background
            : status === 'Cadastrado'
            ? theme.colors.info_background
            : status === 'Cancelado'
            ? theme.colors.danger_background
            : theme.colors.success_background};
`
