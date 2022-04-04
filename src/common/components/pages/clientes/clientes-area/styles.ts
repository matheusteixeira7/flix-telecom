import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.background_900};
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Content = styled.div`
    background-color: ${({ theme }) => theme.colors.background_900};
    margin: 1.25rem;
    border-radius: 10px;

    header {
        width: 100%;
        padding: 1.25rem;
        background-color: ${({ theme }) => theme.colors.background_700};

        border-bottom: 1px solid ${({ theme }) => theme.colors.background_900};
        border-radius: 10px 10px 0 0;

        display: flex;
        justify-content: space-between;

        input {
            padding: 0.5rem 1rem;
            border-radius: 5px;
            border: none;

            background-color: ${({ theme }) => theme.colors.background_800};
            font-size: ${({ theme }) => theme.fontSize.text_sm};
            color: ${({ theme }) => theme.fontColor.title};
            font-weight: ${({ theme }) => theme.fontWeight.medium};

            &::placeholder {
                font-size: ${({ theme }) => theme.fontSize.text_sm};
                color: ${({ theme }) => theme.fontColor.title};
                font-weight: ${({ theme }) => theme.fontWeight.medium};
            }
        }

        div {
            button {
                padding: 0.5rem 1rem;
                border-radius: 5px;
                border: none;

                width: 13rem;

                background-color: ${({ theme }) => theme.colors.background_800};
                font-size: ${({ theme }) => theme.fontSize.text_sm};
                color: ${({ theme }) => theme.fontColor.title};
                font-weight: ${({ theme }) => theme.fontWeight.medium};

                display: flex;
                justify-content: space-between;
                align-items: center;

                cursor: pointer;

                span {
                    margin-right: 1rem;
                }

                &:first-child {
                    margin-right: 1rem;
                }
            }
        }
    }

    table {
        width: 100%;

        text-align: left;
        border-spacing: 0 1px;

        border-collapse: collapse;
    }

    th {
        font-size: ${({ theme }) => theme.fontSize.text_sm};
        color: ${({ theme }) => theme.fontColor.text_gray_500};
        font-weight: ${({ theme }) => theme.fontWeight.medium};

        padding: 1.25rem;

        background-color: ${({ theme }) => theme.colors.background_700};
    }

    tr {
        &:hover td {
            transition: all 0.2s ease-in-out;
            background-color: ${({ theme }) => theme.colors.background_800};
        }
    }

    td {
        padding: 0.5rem 0;
        vertical-align: middle;

        font-size: ${({ theme }) => theme.fontSize.text_sm};
        color: ${({ theme }) => theme.fontColor.text_gray_500};
        font-weight: ${({ theme }) => theme.fontWeight.medium};

        padding: 1rem;

        background-color: ${({ theme }) => theme.colors.background_700};
        border-bottom: 1px solid ${({ theme }) => theme.colors.background_900};
        border-top: 1px solid ${({ theme }) => theme.colors.background_900};
    }

    span {
        margin-left: 1rem;
    }

    div {
        display: flex;
        align-items: center;
    }
`

export const Avatar = styled(Image)`
    border-radius: 50%;

    overflow: hidden;
`
